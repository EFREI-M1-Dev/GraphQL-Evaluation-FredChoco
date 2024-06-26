import styles from "./_Login.module.scss";
import TextField from "../../components/TextField/TextField";
import Button from "../../components/Button/Button";
import {useState} from "react";
import {useMutation, gql} from '@apollo/client';
import {useNavigate} from "react-router-dom";
import {useAuth} from "../../provider/AuthContext";
import {useMainControllerContext} from "../../main";

const SIGN_IN_USER = gql`
mutation SignInUser($username: String!, $password: String!) {
  signInUser(username: $username, password: $password) {
    message
    success
    token
  }
}
`;

const LoginPage = () => {
    const [UsernameValue, setUsernameValue] = useState<string>('');
    const [PasswordValue, setPasswordValue] = useState<string>('');
    const navigate = useNavigate();
    const {login} = useAuth();
    const {m_notificationController} = useMainControllerContext();

    const [signInUser] = useMutation(SIGN_IN_USER);
    const handleSignIn = async () => {
        try {
            const {data} = await signInUser({
                variables: {username: UsernameValue, password: PasswordValue},
            });
            const {message, success, token} = data.signInUser;
            if (success) {
                login(token)
                navigate('/');
                m_notificationController.setNotification({message: "Vous êtes connecté", type: "success"});
            } else {
                m_notificationController.setNotification({message, type: "error"});
            }

        } catch (error) {
            m_notificationController.setNotification({message: "Une erreur est survenue", type: "error"});
        }
    };

    return (
        <div className={styles.container}
             onKeyDown={
                 (e) => {
                     if (e.key === "Enter") {
                         handleSignIn().then().catch((e) => console.error(e));
                     }
                 }
             }
        >
            <div className={styles.form}>
                <div>
                    <h1>Login</h1>
                    <TextField
                        placeholder={"Username"}
                        type={"text"}
                        value={UsernameValue}
                        onChange={(e) => setUsernameValue(e.target.value)}
                    />
                    <TextField
                        placeholder={"Password"}
                        type={"password"}
                        value={PasswordValue}
                        onChange={(e) => setPasswordValue(e.target.value)}
                    />
                </div>
                <Button style={"primary"} onClick={handleSignIn}>Login</Button>
            </div>
        </div>
    );
};

export default LoginPage;