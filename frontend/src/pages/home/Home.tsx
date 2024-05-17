import styles from "./_Home.module.scss";
// import Comment from "../../components/Comment/Comment.tsx";
import Metrics from "../../components/Metrics/Metrics";
// import TextField from "../../components/TextField/TextField";
// import Carousel from "../../components/Carousel/Carousel";
import CardArticle from "../../components/CardArticle/CardArticle.tsx";
import {gql, useQuery} from "@apollo/client";
import {useEffect, useState} from "react";
import {Post} from "../../__generated__/graphql";

const STATISTICS = gql`
query Query {
  getLatestPosts {
    id
    title
  }
}
`;

const HomePage = () => {
    const [allLatestPosts, setAllLatestPosts] = useState<Post[]>([]);
    const {data} = useQuery(STATISTICS);

    useEffect(() => {
        if (data) {
            console.log("allLatestPosts",data);
            setAllLatestPosts(data.getAllPosts);
        }
    }, [data]);

    return (
        <div className={styles.container}>
            <Metrics/>
            <h1 className={styles.title}>RÉCEMMENT:</h1>
            <div>
            {allLatestPosts.map((post) => (
                <CardArticle
                    key={post.id}
                    title={post.title}
                    image={"https://www.buzzfrance.fr/wp-content/uploads/2022/10/quelle-star-de-kpop-es-tu.jpeg"}
                />))
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