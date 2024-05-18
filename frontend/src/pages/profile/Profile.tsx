import styles from "./_Profile.module.scss";
import CardArticle from "../../components/CardArticle/CardArticle.tsx";
import {gql, useQuery} from "@apollo/client";
import {useEffect, useState} from "react";
import {Post, Like} from "../../types/graphql.ts";
import {useAuth} from "../../provider/AuthContext";
import Carousel from "../../components/Carousel/Carousel.tsx";

const USER_POST = gql`
query USER_POST_QUERY($id: ID!) {
  getUserPosts(id: $id) {
    content
    createdAt
    id
    title
    user {
      id
      username
    }
  }
}
`;

const USER_LIKES = gql`
query USER_LIKES_QUERY($id: ID!) {
  getLikesByUser(id: $id) {
    post {
      id
      title
      content
      user {
        username
      }
    }
  }
}
`;

const Profile = () => {
    const { currentUser } = useAuth();
    const [allUserPosts, setAllUserPosts] = useState<Post[]>([]);
    const [allUserLikes, setAllUserLikes] = useState<Like[]>([]);

    const { data } = useQuery(USER_POST, {
        variables: { id: currentUser?.id },
        skip: !currentUser
    });

    const { data: likesData } = useQuery(USER_LIKES, {
        variables: { id: currentUser?.id },
        skip: !currentUser
    });

    useEffect(() => {
        if (likesData) {
            setAllUserLikes(likesData.getLikesByUser);
        }
    }, [likesData]);

    useEffect(() => {
        if (data) {
            setAllUserPosts(data.getUserPosts);
        }
    }, [data]);

    console.log(allUserLikes);
    return (
        <div className={styles.container}>
            <div className={styles.section + " " + styles.profile}>
                <img src="https://via.placeholder.com/150" alt="profile" className={styles.profileImage}/>
                <div className={styles.profileInfo}>
                    <p className={styles.username}>{currentUser?.username}</p>
                    <p>{currentUser?.email}</p>
                </div>
            </div>

            <h2>Posts</h2>
            <div className={styles.posts}>
                <Carousel type={'line'}>
                    {allUserPosts.map((post) => (
                        <CardArticle
                            key={post.id}
                            title={post.title}
                            image={"https://upload.wikimedia.org/wikipedia/commons/5/5a/Aespa%27s_Winter_7.jpg"}
                            authorUsername={post.user.username}
                        />
                    ))}
                </Carousel>
            </div>

            <h2>Liked</h2>
            <div className={styles.posts}>
                <Carousel type={'line'}>
                    {allUserLikes.map((like) => (
                        <CardArticle
                            key={like.post.id}
                            title={like.post.title}
                            image={"https://upload.wikimedia.org/wikipedia/commons/5/5a/Aespa%27s_Winter_7.jpg"}
                            authorUsername={like.post.user.username}
                        />
                    ))}
                </Carousel>
            </div>
        </div>
    );
};

export default Profile;