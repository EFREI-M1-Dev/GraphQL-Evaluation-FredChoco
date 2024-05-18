import styles from "./_Home.module.scss";
// import Comment from "../../components/Comment/Comment.tsx";
import Metrics from "../../components/Metrics/Metrics";
// import TextField from "../../components/TextField/TextField";
// import Carousel from "../../components/Carousel/Carousel";
import CardArticle from "../../components/CardArticle/CardArticle.tsx";
import {gql, useQuery} from "@apollo/client";
import {useEffect, useState} from "react";
import {LatestPost} from "../../types/graphql";

const LATEST_POST = gql`
query LATEST_POST_Query {
  getLatestPosts {
  post {
    id
    title
    createdAt
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
            <h1 className={styles.title}>RÉCEMMENT:</h1>
            <div className={styles.cardContainer}>
                {allLatestPosts.map((post) => (
                    <CardArticle
                        key={post.post.id}
                        title={post.post.title}
                        image={"https://www.buzzfrance.fr/wp-content/uploads/2022/10/quelle-star-de-kpop-es-tu.jpeg"}
                        authorUsername={post.post.user.username}
                        likes={post.likes}
                        dislikes={post.dislikes}
                    />
                ))
                }
            </div>


            {/*<Carousel type={'line'} >*/}
            {/*    {*/}
            {/*        Array.from({length: 10}).map((_, index) => (*/}
            {/*                <CardArticle key={index}/>*/}
            {/*        ))*/}
            {/*    }*/}
            {/*</Carousel>*/}

            {/*<div style={{*/}
            {/*    width: "70%"*/}
            {/*}}>*/}
            {/*    <TextField placeholder={"Rechercher un article"} type={"text"} style={"search"}/>*/}
            {/*</div>*/}

            {/*<div className={styles.section}>*/}
            {/*    <CardArticle/>*/}
            {/*    <CardArticle/>*/}
            {/*</div>*/}


            {/*<Comment/>*/}
        </div>
    );
};

export default HomePage;