import styles from "./_Register.module.scss";
import TextField from "../../components/TextField/TextField";
import Button from "../../components/Button/Button";
import React, {useEffect, useState} from "react";
import {gql, useMutation} from "@apollo/client";
import {useNavigate} from "react-router-dom";
import {useAuth} from "../../provider/AuthContext";
import {useMainControllerContext} from "../../main";
import {STATISTICS} from "../../components/Metrics/Metrics";

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
    const {m_notificationController} = useMainControllerContext();
    const {currentUser, loggedIn, login} = useAuth();

    const [createUser] = useMutation(CREATE_USER, {
        refetchQueries: [{query: STATISTICS}]
    });
    const [editUser] = useMutation(UPDATE_USER);

    const [FileValue, setFileValue] = useState<File | null>(null);
    const [ImagePath, setImagePath] = useState<string>('');

    const handleSignUp = async () => {
        if (PasswordValue !== ConfirmPasswordValue) {
            m_notificationController.setNotification({message: "Passwords do not match", type: "warning"});
            return;
        }

        if(!UsernameValue || !EmailValue || !PasswordValue || !ConfirmPasswordValue) {
            m_notificationController.setNotification({message: "Merci de remplir tous les champs", type: "warning"}); // "Please fill all fields
            return;
        }

        try {
            const {data} = await createUser({
                variables: {username: UsernameValue, password: PasswordValue, email: EmailValue},
            });

            const {message, success} = data.createUser;
            if (success) {
                m_notificationController.setNotification({message: "Account created successfully", type: "success"});
                navigate('/login');
            } else {
                m_notificationController.setNotification({message, type: "error"});
            }
        } catch (error) {
            m_notificationController.setNotification({message: "Une erreur est survenue", type: "error"});
        }
    }

    const handleEdit = async () => {
        if(!UsernameValue || !EmailValue) {
            m_notificationController.setNotification({message: "Merci de remplir tous les champs", type: "warning"}); // "Please fill all fields
            return;
        }

        try {
            const {data} = await editUser({
                variables: {
                    updateUserId: currentUser?.id,
                    input: {
                        username: UsernameValue,
                        email: EmailValue,
                        file: FileValue
                    }
                }
            });

            const {message, success, token} = data.updateUser;
            if (success) {
                login(token);
                m_notificationController.setNotification({message: "Account updated successfully", type: "success"});
                navigate('/profile');
            } else {
                m_notificationController.setNotification({message, type: "error"});
            }
        } catch (error) {
            m_notificationController.setNotification({message: "Une erreur est survenue", type: "error"});
        }
    }

    const handleSubmit = async () => {
        if (loggedIn) {
            handleEdit().then().catch((e) => console.error(e));
        } else {
            handleSignUp().then().catch((e) => console.error(e));
        }
    }

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files ? e.target.files[0] : null;
        setFileValue(file);
        if (!file) return;
        setImagePath(URL.createObjectURL(file));
    };

    useEffect(() => {
        if (loggedIn && currentUser) {
            setUsernameValue(currentUser.username);
            setEmailValue(currentUser.email);
            setImagePath("http://localhost:5009/" + currentUser.imagePath);
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
                        <>
                            <Button className={styles.profileImage} style={"header"}>
                                <label htmlFor={"file"}>
                                    <img
                                        className={styles.postImage}
                                        src={ImagePath}
                                        alt={"image"}
                                    />
                                </label>
                            </Button>
                            <input
                                type="file"
                                onChange={handleFileChange}
                                id={"file"}
                                className={styles.fileInput}
                            />
                        </>
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