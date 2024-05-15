import styles from "./_CardArticle.module.scss";

const CardArticle = (
    props: {
        className?: string;
    }
) => {

    return (
        <div
            className={styles.container+" "+(props.className || '')}
            onClick={() => console.log("cardClicked")}
        >
            <div className={styles.section}>
                <h2>AESPA - KARINA DANS LA SAUCE</h2>
            </div>
        </div>
    )
}
export default CardArticle;
