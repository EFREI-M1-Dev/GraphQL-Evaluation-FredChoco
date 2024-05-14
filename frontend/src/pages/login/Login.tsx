import styles from "./_Login.module.scss";
import TextField from "../../components/TextField/TextField";
import Button from "../../components/Button/Button";
import {useState} from "react";

const LoginPage = () => {

    const [UsernameValue, setUsernameValue] = useState<string>('');
    const [PasswordValue, setPasswordValue] = useState<string>('');

    return (
        <div className={styles.container}>
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
                <Button style={"primary"}>Login</Button>
            </div>
        </div>
    );
};

export default LoginPage;