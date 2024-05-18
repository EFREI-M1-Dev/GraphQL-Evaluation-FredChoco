import styles from "./_Post.module.scss";
import Comment from "../../components/Comment/Comment.tsx";
import TextField from "../../components/TextField/TextField";
import CardArticle from "../../components/CardArticle/CardArticle.tsx";

const Post = () => {
    return (
        <div className={styles.container}>
            <div className={styles.side__left}>
                <h2 className={styles.postTitle}>Aespa - Karina dans la sauce</h2>

                <p>On sait depuis longtemps que travailler avec du texte lisible et contenant du sens est source de
                    distractions, et empêche de se concentrer sur la mise en page elle-même. L'avantage du Lorem Ipsum
                    sur un texte générique comme 'Du texte. Du texte. Du texte.' est qu'il possède une distribution de
                    lettres plus ou moins normale, et en tout cas comparable avec celle du français standard. De
                    nombreuses suites logicielles de mise en page ou éditeurs de sites Web ont fait du Lorem Ipsum leur
                    faux texte par défaut, et une recherche pour 'Lorem Ipsum' vous conduira vers de nombreux sites qui
                    n'en sont encore qu'à leur phase de construction. Plusieurs versions sont apparues avec le temps,
                    parfois par accident, souvent intentionnellement (histoire d'y rajouter de petits clins d'oeil,
                    voire des phrases embarassantes).

                    On sait depuis longtemps que travailler avec du texte lisible et contenant du sens est source de
                    distractions, et empêche de se concentrer sur la mise en page elle-même. L'avantage du Lorem Ipsum
                    sur un texte générique comme 'Du texte. Du texte. Du texte.' est qu'il possède une distribution de
                    lettres plus ou moins normale, et en tout cas comparable avec celle du français standard. De
                    nombreuses suites logicielles de mise en page ou éditeurs de sites Web ont fait du Lorem Ipsum leur
                    faux texte par défaut, et une recherche pour 'Lorem Ipsum' vous conduira vers de nombreux sites qui
                    n'en sont encore qu'à leur phase de construction. Plusieurs versions sont apparues avec le temps,
                    parfois par accident, souvent intentionnellement (histoire d'y rajouter de petits clins d'oeil,
                    voire des phrases embarassantes).

                    On sait depuis longtemps que travailler avec du texte lisible et contenant du sens est source de
                    distractions, et empêche de se concentrer sur la mise en page elle-même. L'avantage du Lorem Ipsum
                    sur un texte générique comme 'Du texte. Du texte. Du texte.' est qu'il possède une distribution de
                    lettres plus ou moins normale, et en tout cas comparable avec celle du français standard. De
                    nombreuses suites logicielles de mise en page ou éditeurs de sites Web ont fait du Lorem Ipsum leur
                    faux texte par défaut, et une recherche pour 'Lorem Ipsum' vous conduira vers de nombreux sites qui
                    n'en sont encore qu'à leur phase de construction. Plusieurs versions sont apparues avec le temps,
                    parfois par accident, souvent intentionnellement (histoire d'y rajouter de petits clins d'oeil,
                    voire des phrases embarassantes).
                </p>

                <p>67 Commentaires</p>
                <TextField placeholder={"Ajouter un commentaire..."} type={"text"} style={"search"}/>
                <Comment/>
                <Comment/>
                <Comment/>
            </div>

            <div className={styles.side__right}>
                <CardArticle
                    title={"Aespa - Karina dans la sauce"}
                    image={"https://www.buzzfrance.fr/wp-content/uploads/2022/10/quelle-star-de-kpop-es-tu.jpeg"}
                    authorUsername={"user"}
                    likes={12}
                    dislikes={3}
                />
                <div>
                    <img src={'/pictograms/like.svg'}/>
                    <img src={'/pictograms/dislike.svg'}/>
                </div>
                <p>Show comments</p>
            </div>
        </div>
    );
};

export default Post;