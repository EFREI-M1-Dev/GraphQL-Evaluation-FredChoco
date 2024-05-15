import styles from "./_Header.module.scss";
import Logo from "../Logo/Logo";
import Button from "../Button/Button";
import {Link} from "react-router-dom";

const Header = () => {

    return (
        <div className={styles.container}>
            <div className={styles.section}>
                <Link to={"/"} className={styles.link}>
                    <Logo size={"small"} glow={true}/>
                </Link>
                <Button style={"header"} route={"search"}> [SEARCH] </Button>
                <Button style={"header"} route={"random"}> [RANDOM] </Button>
                <Button style={"header"} route={"post"}> [POST] </Button>
            </div>
            <div className={styles.section}>
                <Button style={"header"} route={"login"}> [LOGIN] </Button>
                <Button style={"header"} route={"register"}> [SIGN UP] </Button>
            </div>
        </div>
    )
}
export default Header;
