import styles from "./_Footer.module.scss";
import {Link} from "react-router-dom";

const Footer = () => {

    return (
        <div className={"glow"+" "+styles.container}>
            <div className={styles.section}>
                <p>© 2024 케이팝. All rights reserved.</p><br />
            </div>
            <div className={styles.section}>
                <p>
                    Designed & Created by
                    <Link to={"https://github.com/Fredray-21"} className={styles.link}> Fredray21 </Link>
                    &
                    <Link to={"https://github.com/Chocolatiines"} className={styles.link}> Chocolatiines </Link>
                    | Commit: 2024-06-01
                </p>

            </div>
        </div>
    )
}
export default Footer;
