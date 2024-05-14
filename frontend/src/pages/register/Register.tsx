import styles from "./_Register.module.scss";
import TextField from "../../components/TextField/TextField";
import Button from "../../components/Button/Button";
import {useState} from "react";

const RegisterPage = () => {

    const [UsernameValue, setUsernameValue] = useState<string>('');
    const [EmailValue, setEmailValue] = useState<string>('');
    const [PasswordValue, setPasswordValue] = useState<string>('');
    const [ConfirmPasswordValue, setConfirmPasswordValue] = useState<string>('');

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
                <Button style={"primary"}>Create Account</Button>
            </div>
        </div>
    );
};

export default RegisterPage;