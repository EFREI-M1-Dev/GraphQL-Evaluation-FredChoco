import styles from "./_Header.module.scss";
import Logo from "../Logo/Logo";
import Button from "../Button/Button";
import {Link} from "react-router-dom";
import {useEffect, useState} from "react";
import {useAuth} from "../../provider/AuthContext";

const Header = () => {

    const [widthScrollBar, setWidthScrollBar] = useState(0);
    const handleScroll = () => {
        const scrollBar = document.querySelector(`.${styles.scrollBar}`);
        if (scrollBar) {
            const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
            const width = window.scrollY / scrollHeight * 100;
            setWidthScrollBar(width);
        }
    }

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const { loggedIn,logout } = useAuth();

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
            {!loggedIn ?
                <div className={styles.section}  >
                    <Button style={"header"} route={"login"}> [LOGIN] </Button>
                    <Button style={"header"} route={"register"}> [SIGN UP] </Button>
                </div>
                :
                <div className={styles.section} >
                    <Button style={"header"} route={"profile"}> [PROFILE] </Button>
                    <Button style={"header"} onClick={logout} > [LOGOUT] </Button>
                </div>
            }
            <div className={styles.scrollBar}  style={{width:`${widthScrollBar}%`}}> </div>
        </div>
    )
}
export default Header;
