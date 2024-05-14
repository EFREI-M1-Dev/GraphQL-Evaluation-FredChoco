import styles from "./_Metrics.module.scss"
import Metric from "../Metric/Metric";

const Metrics = () => {
    return (
        <div className={styles.container}>
                <Metric title={"Nombre d'article"} number={112}/>
                <Metric title={"Nombre de commentaire"} number={69}/>
                <Metric title={"Nombre de catégories"} number={21}/>
                <Metric title={"Taux d'appréciation"} number={97} isPercent={true}/>
        </div>
    );
}

export default Metrics;