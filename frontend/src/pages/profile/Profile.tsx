import styles from "./_Profile.module.scss";
import CardArticle from "../../components/CardArticle/CardArticle.tsx";
import {gql, useQuery} from "@apollo/client";
import {useEffect, useState} from "react";
import {Post} from "../../types/graphql.ts";
import {useAuth} from "../../provider/AuthContext";

const USER_POST = gql`
query USER_POST_QUERY($id: ID!) {
  getUserPosts(id: $id) {
    content
    createdAt
    id
    title
    user {
      id
    }
  }
}
`;

const Profile = () => {
    const { currentUser } = useAuth();
    const [allUserPosts, setAllUserPosts] = useState<Post[]>([]);

    const {data, error} = useQuery(USER_POST, {
        variables: { id: currentUser?.id },
        skip: !currentUser
    });

    if (error) {
        console.error(error.graphQLErrors[0].message);
    }

    useEffect(() => {
        if (data) {
            setAllUserPosts(data.getUserPosts);
        }
    }, [data]);

    console.log(data);
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

            </div>

            <div className={styles.section}>
                <h2>Liked</h2>

            </div>
        </div>
    );
};

export default Profile;