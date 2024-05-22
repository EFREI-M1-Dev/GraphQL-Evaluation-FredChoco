import styles from "./_Home.module.scss";
import Metrics from "../../components/Metrics/Metrics";
import CardArticle from "../../components/CardArticle/CardArticle.tsx";
import {gql, useQuery} from "@apollo/client";
import {useEffect, useState} from "react";
import {LatestPost} from "../../types/graphql";

export const LATEST_POST = gql`
query LATEST_POST_Query {
  getLatestPosts {
  post {
    id
    title
    createdAt
    imagePath
    user {
        username
    }
  }
  likes 
  dislikes
  }
}
`;

const HomePage = () => {
    const [allLatestPosts, setAllLatestPosts] = useState<LatestPost[]>([]);
    const {data} = useQuery(LATEST_POST);

    useEffect(() => {
        if (data) {
            setAllLatestPosts(data.getLatestPosts);
        }
    }, [data]);

    return (
        <div className={styles.container}>
            <Metrics/>
            <h1 className={styles.title}>RÉCEMMENT :</h1>
            <div className={styles.cardContainer}>
                {allLatestPosts.map((post) => (
                    <CardArticle
                        key={post.post.id}
                        title={post.post.title}
                        image={`http://localhost:5009/${post.post.imagePath}`}
                        authorUsername={post.post.user.username}
                        likes={post.likes}
                        dislikes={post.dislikes}
                        id={post.post.id}
                    />
                ))
                }
            </div>
        </div>
    );
};

export default HomePage;