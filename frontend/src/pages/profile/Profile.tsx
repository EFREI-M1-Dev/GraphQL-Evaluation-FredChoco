import styles from "./_Profile.module.scss";
import CardArticle from "../../components/CardArticle/CardArticle.tsx";
import {gql, useQuery} from "@apollo/client";
import {useEffect, useState} from "react";
import {LatestPost} from "../../types/graphql.ts";
import {useAuth} from "../../provider/AuthContext";
import Carousel from "../../components/Carousel/Carousel.tsx";
import {useNavigate, useParams} from 'react-router-dom';
import Button from "../../components/Button/Button";

export const USER_POST = gql`
query USER_POST_QUERY($id: ID!) {
    getUserPosts(id: $id) {
        post {
            content
            createdAt
            id
            title
            imagePath
            user {
                id
                username
            }
        }
        likes
        dislikes
    }
}
`;

export const USER_LIKES = gql`
query USER_LIKES_QUERY($id: ID!) {
  getPostLikedByUser(id: $id) {
    comments
    dislikes
    likes
    post {
      content
      createdAt
      id
      imagePath
      title
      user {
        id
        username
      }
    }
  }
}
`;

export const USER_BY_USERNAME = gql`
query USER_BY_USERNAME($username: String!) {
  getUserByUsername(username: $username) {
    id
    username
    email
    imagePath
  }
}
`;

const Profile = () => {
    const {currentUser} = useAuth();
    const {username} = useParams();
    const navigate = useNavigate();

    const [allUserPosts, setAllUserPosts] = useState<LatestPost[]>([]);
    const [allUserLikes, setAllUserLikes] = useState<LatestPost[]>([]);
    const [profileUser, setProfileUser] = useState(currentUser);
    const [imagePath, setImagePath] = useState<string>("");

    const isMyProfile = !username || username.toLowerCase() === currentUser?.username.toLowerCase();

    const {data: userData} = useQuery(USER_BY_USERNAME, {
        variables: {username: username?.toLowerCase()},
        skip: !username,
    });

    useEffect(() => {
        if (isMyProfile) {
            setProfileUser(currentUser);
        } else if (userData) {
            if (!userData.getUserByUsername) {
                navigate('/profile');
            } else {
                setProfileUser(userData.getUserByUsername);
            }
        }
    }, [currentUser, isMyProfile, userData, navigate]);

    const {data: postData} = useQuery(USER_POST, {
        variables: {id: profileUser?.id},
        skip: !profileUser
    });

    const {data: likesData} = useQuery(USER_LIKES, {
        variables: {id: profileUser?.id},
        skip: !profileUser
    });

    useEffect(() => {
        if (postData) {
            setAllUserPosts(postData.getUserPosts);
        }
    }, [postData]);

    useEffect(() => {
        if (likesData) {
            setAllUserLikes(likesData.getPostLikedByUser);
        }
    }, [likesData]);


    useEffect(() => {
        if (profileUser) {
            let path = "https://via.placeholder.com/150";
            if (profileUser.imagePath !== "https://via.placeholder.com/150") {
                path = "http://localhost:5009/" + profileUser.imagePath;
            }
            setImagePath(path);
        }
    }, [profileUser]);

    console.log(allUserLikes);
    return (
        <div className={styles.container}>
            <div className={styles.containerProfile}>
                <div className={styles.section + " " + styles.profile}>
                    <img src={imagePath} alt="profile" className={styles.profileImage}/>
                    <div className={styles.profileInfo}>
                        <p className={styles.username}>{profileUser?.username}</p>
                        <p>{profileUser?.email}</p>
                    </div>
                </div>
                {isMyProfile && (
                    <Button style={"primary"} route={`/edit/profile`}>Modifier le profil</Button>
                )}
            </div>

            {isMyProfile ? (
                <div className={styles.myPostsTitle}>
                    <h2>Mes Posts</h2>
                    <div>
                        <Button style={"primary"} route={"/createPost"}>Créer un post</Button>
                    </div>
                </div>
            ) : (
                <h2>Posts de {profileUser?.username}</h2>
            )}

            <div className={styles.posts}>
                <Carousel type={'line'}>
                    {allUserPosts.map((post) => (
                        <CardArticle
                            key={post.post.id}
                            title={post.post.title}
                            image={`http://localhost:5009/${post.post.imagePath}`}
                            authorUsername={post.post.user.username}
                            id={post.post.id}
                            actionBar={isMyProfile ? post.post.id : undefined}
                            likes={post.likes}
                            dislikes={post.dislikes}
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
                            image={`http://localhost:5009/${like.post.imagePath}`}
                            authorUsername={like.post.user.username}
                            id={like.post.id}
                            likes={like.likes}
                            dislikes={like.dislikes}
                        />
                    ))}
                </Carousel>
            </div>
        </div>
    );
};

export default Profile;