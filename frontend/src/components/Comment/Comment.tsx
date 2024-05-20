import styles from "./_Comment.module.scss";
import {Link} from "react-router-dom";

const Comment = (
    props: {
        username: string;
        content: string;
        createdAt: string;
    }) => {

    const {username, content} = props;

    return (
        <div className={styles.container}>
            <hr />
            <div className={styles.section}>

                <p><Link to={"/profile/"+username} className={styles.link}>{username}</Link></p>
                <p className={"glow"}>Il y a 2 jours</p>
            </div>
            <div className={styles.section}>
                <p>{content}</p>
            </div>
            <hr />
        </div>
    )
}
export default Comment;
