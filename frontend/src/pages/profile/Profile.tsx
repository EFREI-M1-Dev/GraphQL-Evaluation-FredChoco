import styles from "./_Profile.module.scss";
import CardArticle from "../../components/CardArticle/CardArticle.tsx";
import {gql, useQuery} from "@apollo/client";
import {useEffect, useState} from "react";
import {Post} from "../../types/graphql.ts";
import {useAuth} from "../../provider/AuthContext";

const USER_POST = gql`
query USER_POST_Query {
  getUserPosts {
    id
    title
    createdAt
    user {
        username
    }
  }
}
`;

const Profile = () => {
    const [allUserPosts, setAllUserPosts] = useState<Post[]>([]);
    const {data} = useQuery(USER_POST);

    // tien c'est comme ça que tu récupères l'utilisateur connecté
    const { currentUser } = useAuth();
    console.log(currentUser);

    useEffect(() => {
        if (data) {
            setAllUserPosts(data.getLatestPosts);
        }
    }, [data]);

    return (
        <div className={styles.container}>
            <div className={styles.section + " " + styles.profile}>
                <img src="https://via.placeholder.com/150" alt="profile" className={styles.profileImage}/>
                <div className={styles.profileInfo}>
                    <p className={styles.username}>@Username</p>
                    <p>email.test@example.com</p>
                </div>
            </div>

            <div className={styles.section}>
                <h2>Posts</h2>
                {allUserPosts.map((post) => (
                    <CardArticle
                        key={post.id}
                        title={post.title}
                        image={"https://www.buzzfrance.fr/wp-content/uploads/2022/10/quelle-star-de-kpop-es-tu.jpeg"}
                        authorUsername={post.user.username}
                    />
                ))
                }
            </div>

            <div className={styles.section}>
                <h2>Liked</h2>

            </div>
        </div>
    );
};

export default Profile;