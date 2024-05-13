import styles from "./_Comment.module.scss";
import {Link} from "react-router-dom";

const Comment = () => {

    return (
        <div className={styles.container}>
            <hr />
            <div className={styles.section}>

                <p><Link to={"/"} className={styles.link}>@Fredray21</Link></p>
                <p className={"glow"}>Il y a 2 jours</p>
            </div>
            <div className={styles.section}>
                <p>The mv is literally just "Just go and have fun and we'll record" and i LOVE it</p>
            </div>
            <hr />
        </div>
    )
}
export default Comment;
