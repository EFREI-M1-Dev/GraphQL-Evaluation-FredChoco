import styles from "./_Home.module.scss";
import Button from "../../components/Button/Button";
import Comment from "../../components/Comment/Comment.tsx";
import CardArticle from "../../components/CardArticle/CardArticle.tsx";

const HomePage = () => {
    return (
            <div className={styles.container}>
                <Button style={"primary"} route={"test"} > Hello World </Button>
                <Comment/>
                <div className={styles.section}>
                    <CardArticle/>
                    <CardArticle/>
                </div>
            </div>
        );
};

export default HomePage;