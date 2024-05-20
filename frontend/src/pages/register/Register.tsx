import styles from "./_Register.module.scss";
import TextField from "../../components/TextField/TextField";
import Button from "../../components/Button/Button";
import {useEffect, useState} from "react";
import {gql, useMutation} from "@apollo/client";
import {useNavigate} from "react-router-dom";
import {useAuth} from "../../provider/AuthContext";

const CREATE_USER = gql`
mutation createUser($username: String!, $password: String!, $email: String!) {
  createUser(username: $username, password: $password, email: $email) {
    code
    message
    success
    user {
      username
      id
    }
  }
}
`;

const UPDATE_USER = gql`
mutation UpdateUser($updateUserId: ID!, $input: UpdateUserInput!) {
  updateUser(id: $updateUserId, input: $input) {
    code
    message
    success
    token
  }
}
`;

const RegisterPage = () => {
    const [UsernameValue, setUsernameValue] = useState<string>('');
    const [EmailValue, setEmailValue] = useState<string>('');
    const [PasswordValue, setPasswordValue] = useState<string>('');
    const [ConfirmPasswordValue, setConfirmPasswordValue] = useState<string>('');
    const navigate = useNavigate();
    const {currentUser, loggedIn, login} = useAuth();

    const [createUser] = useMutation(CREATE_USER);
    const [editUser] = useMutation(UPDATE_USER);

    const handleSignUp = async () => {
        if (PasswordValue !== ConfirmPasswordValue) {
            alert("Passwords do not match");
            return;
        }

        try {
            const {data} = await createUser({
                variables: {username: UsernameValue, password: PasswordValue, email: EmailValue},
            });

            const {message, success} = data.createUser;
            if (success) {
                alert("Account created successfully");
                navigate('/login');
            } else {
                alert(message);
            }
        } catch (error) {
            console.error("Error creating account:", error);
        }
    }

    const handleEdit = async () => {
        try {
            const {data} = await editUser({
                variables: {
                    updateUserId: currentUser?.id,
                    input: {
                        username: UsernameValue,
                        email: EmailValue,
                    }
                }
            });

            const {message, success, token} = data.updateUser;
            if (success) {
                login(token);
                alert("Account updated successfully");
                navigate('/profile');
            } else {
                alert(message);
            }
        } catch (error) {
            console.error("Error creating account:", error);
        }
    }

    const handleSubmit = async () => {
        if (loggedIn) {
            handleEdit().then().catch((e) => console.error(e));
        } else {
            handleSignUp().then().catch((e) => console.error(e));
        }
    }

    useEffect(() => {
        if (loggedIn && currentUser) {
            setUsernameValue(currentUser.username);
            setEmailValue(currentUser.email);
        }
    }, [currentUser, loggedIn]);

    return (
        <div className={styles.container}
             onKeyDown={
                 (e) => {
                     if (e.key === "Enter") {
                         handleSubmit().then().catch((e) => console.error(e));
                     }
                 }
             }
        >
            <div className={styles.form}>
                <div>
                    <h1>{loggedIn ? "Edit Account" : "Create Account"}</h1>
                    {loggedIn && (
                        <Button className={styles.profileImage} style={"header"}
                                onClick={() => navigate('/edit/profile')}>
                            <img src="https://via.placeholder.com/150" alt="profile"
                            />
                        </Button>
                    )}
                    <TextField
                        placeholder={"Username"}
                        type={"text"}
                        value={UsernameValue}
                        onChange={(e) => setUsernameValue(e.target.value)}
                    />
                    <TextField
                        placeholder={"Email"}
                        type={"email"}
                        value={EmailValue}
                        onChange={(e) => setEmailValue(e.target.value)}
                    />
                    {loggedIn ? null : (
                        <>
                            <TextField
                                placeholder={"Password"}
                                type={"password"}
                                value={PasswordValue}
                                onChange={(e) => setPasswordValue(e.target.value)}
                            />
                            <TextField
                                placeholder={"Confirm Password"}
                                type={"password"}
                                value={ConfirmPasswordValue}
                                onChange={(e) => setConfirmPasswordValue(e.target.value)}
                            />
                        </>
                    )}
                </div>
                <Button style={"primary"} onClick={handleSubmit}>
                    {loggedIn ? "Update Account" : "Create Account"}
                </Button>
            </div>
        </div>
    );
};

export default RegisterPage;