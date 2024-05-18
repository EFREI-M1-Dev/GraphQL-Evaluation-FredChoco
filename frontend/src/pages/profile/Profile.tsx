import styles from "./_Profile.module.scss";
import CardArticle from "../../components/CardArticle/CardArticle.tsx";
import { gql, useQuery } from "@apollo/client";
import { useEffect, useState } from "react";
import { Post, Like } from "../../types/graphql.ts";
import { useAuth } from "../../provider/AuthContext";
import Carousel from "../../components/Carousel/Carousel.tsx";
import { useNavigate, useParams } from 'react-router-dom';
import Button from "../../components/Button/Button";

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

const USER_BY_USERNAME = gql`
query USER_BY_USERNAME($username: String!) {
  getUserByUsername(username: $username) {
    id
    username
    email
  }
}
`;

const Profile = () => {
    const { currentUser } = useAuth();
    const { username } = useParams();
    const navigate = useNavigate();

    const [allUserPosts, setAllUserPosts] = useState<Post[]>([]);
    const [allUserLikes, setAllUserLikes] = useState<Like[]>([]);
    const [profileUser, setProfileUser] = useState(currentUser);

    const isMyProfile = !username || username.toLowerCase() === currentUser?.username.toLowerCase();

    const { data: userData } = useQuery(USER_BY_USERNAME, {
        variables: { username: username?.toLowerCase() },
        skip: !username || isMyProfile,
    });

    useEffect(() => {
        if (isMyProfile) {
            setProfileUser(currentUser);
        } else if (userData) {
            if (!userData.getUserByUsername) {
                navigate('/');
            } else {
                setProfileUser(userData.getUserByUsername);
            }
        }
    }, [currentUser, isMyProfile, userData, navigate]);

    const { data: postData } = useQuery(USER_POST, {
        variables: { id: profileUser?.id },
        skip: !profileUser
    });

    const { data: likesData } = useQuery(USER_LIKES, {
        variables: { id: profileUser?.id },
        skip: !profileUser
    });

    useEffect(() => {
        if (postData) {
            setAllUserPosts(postData.getUserPosts);
        }
    }, [postData]);

    useEffect(() => {
        if (likesData) {
            setAllUserLikes(likesData.getLikesByUser);
        }
    }, [likesData]);


    return (
        <div className={styles.container}>
            <div className={styles.section + " " + styles.profile}>
                <img src="https://via.placeholder.com/150" alt="profile" className={styles.profileImage} />
                <div className={styles.profileInfo}>
                    <p className={styles.username}>{profileUser?.username}</p>
                    <p>{profileUser?.email}</p>
                </div>
            </div>

            {isMyProfile ? (
                <div className={styles.myPostsTitle}>
                    <h2>Mes Posts</h2>
                    <div>
                        <Button style={"primary"} route={"/createPost"} >Créer un post</Button>
                    </div>
                </div>
            ) : (
                <h2>Posts de {profileUser?.username}</h2>
            )}

            <div className={styles.posts}>
                <Carousel type={'line'}>
                    {allUserPosts.map((post) => (
                        <CardArticle
                            key={post.id}
                            title={post.title}
                            image={"https://www.buzzfrance.fr/wp-content/uploads/2022/10/quelle-star-de-kpop-es-tu.jpeg"}
                            authorUsername={post.user.username}
                        />
                    ))}
                </Carousel>
            </div>

            <h2>{isMyProfile ? 'Mes ' : ''}Liked</h2>
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
