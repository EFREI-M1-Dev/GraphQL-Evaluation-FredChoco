import styles from "./_Comment.module.scss";
import {Link} from "react-router-dom";
import {User} from "../../types/graphql.ts";
import {useEffect, useState} from "react";

const Comment = (
    props: {
        user: User;
        content: string;
        createdAt: string;
    }) => {

    const {user, content, createdAt} = props;
    const [imagePath, setImagePath] = useState<string>("");

    useEffect(() => {
        if (user) {
            let path = "https://via.placeholder.com/150";
            if (user.imagePath !== "https://via.placeholder.com/150") {
                path = "http://localhost:4000/" + user.imagePath;
            }
            setImagePath(path);
        }
    }, [user]);

    return (
        <div className={styles.container}>
            <hr />
            <div className={styles.section}>
                <Link to={"/profile/" + user.username} className={styles.link}><img src={imagePath} alt="profile" className={styles.profileImage}/></Link>
                <p><Link to={"/profile/" + user.username} className={styles.link}>{user.username}</Link></p>
                <p className={"glow"}>{createdAt}</p>
            </div>
            <div className={styles.section}>
                <p>{content}</p>
            </div>
            <hr />
        </div>
    )
}
export default Comment;
