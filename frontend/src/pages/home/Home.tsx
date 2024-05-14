import styles from "./_Home.module.scss";
import Comment from "../../components/Comment/Comment.tsx";
import CardArticle from "../../components/CardArticle/CardArticle.tsx";
import Metrics from "../../components/Metrics/Metrics";
import TextField from "../../components/TextField/TextField";

const HomePage = () => {
    return (
        <div className={styles.container}>

            <Metrics/>

            <div className={styles.section}>
                <CardArticle/>
                <CardArticle/>
            </div>
            <div style={{
                width: "70%"
            }}>
                <TextField placeholder={"Rechercher un article"} type={"text"} style={"search"}/>
            </div>
            <Comment/>
        </div>
    );
};

export default HomePage;