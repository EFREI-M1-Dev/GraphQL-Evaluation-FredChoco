import styles from "./_Register.module.scss";
import TextField from "../../components/TextField/TextField";
import Button from "../../components/Button/Button";
import {useState} from "react";
import {gql, useMutation} from "@apollo/client";
import { useNavigate } from "react-router-dom";

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

const RegisterPage = () => {
    const [UsernameValue, setUsernameValue] = useState<string>('');
    const [EmailValue, setEmailValue] = useState<string>('');
    const [PasswordValue, setPasswordValue] = useState<string>('');
    const [ConfirmPasswordValue, setConfirmPasswordValue] = useState<string>('');
    const navigate = useNavigate();

    const [createUser] = useMutation(CREATE_USER);

    const handleSignUp = async () => {
        if (PasswordValue !== ConfirmPasswordValue) {
            alert("Passwords do not match");
            return;
        }

        try {
            const { data } = await createUser({
                variables: { username: UsernameValue, password: PasswordValue, email: EmailValue },
            });

            const { message, success } = data.createUser;
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


    return (
        <div className={styles.container}>
            <div className={styles.form}>
                <div>
                    <h1>Sign Up</h1>
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
                </div>
                <Button style={"primary"} onClick={handleSignUp} >Create Account</Button>
            </div>
        </div>
    );
};

export default RegisterPage;