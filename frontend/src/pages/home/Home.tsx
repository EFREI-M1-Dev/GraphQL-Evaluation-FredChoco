import styles from "./_Home.module.scss";
import Comment from "../../components/Comment/Comment.tsx";
import CardArticle from "../../components/CardArticle/CardArticle.tsx";
import Metrics from "../../components/Metrics/Metrics";
import TextField from "../../components/TextField/TextField";
import Carousel from "../../components/Carousel/Carousel";

const HomePage = () => {
    return (
        <div className={styles.container}>
            <Metrics/>
            <Carousel type={'line'} >
                {
                    Array.from({length: 10}).map((_, index) => (
                            <CardArticle key={index}/>
                    ))
                }
            </Carousel>

            <div style={{
                width: "70%"
            }}>
                <TextField placeholder={"Rechercher un article"} type={"text"} style={"search"}/>
            </div>

            <div className={styles.section}>
                <CardArticle/>
                <CardArticle/>
            </div>

            <Comment/>
        </div>
    );
};

export default HomePage;