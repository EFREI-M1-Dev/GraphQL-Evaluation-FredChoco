import styles from "./_Metrics.module.scss"
import Metric from "../Metric/Metric";
import {gql, useQuery} from "@apollo/client";
import {useEffect, useState} from "react";

const STATISTICS = gql`
query Query {
  getTotalPostCount
  getTotalCommentCount
  getAppreciationRate
}
`;


const Metrics = () => {
    const [totalPostCount, setTotalPostCount] = useState<number>(0);
    const [totalCommentCount, setTotalCommentCount] = useState<number>(0);
    const [appreciationRate, setAppreciationRate] = useState<number>(0);

    const { data } = useQuery(STATISTICS);

    useEffect(() => {
        if (data)
        {
            setTotalPostCount(data.getTotalPostCount);
            setTotalCommentCount(data.getTotalCommentCount);
            setAppreciationRate(data.getAppreciationRate);
        }
    }, [data]);


    return (
        <div className={styles.container}>
                <Metric title={"Nombre d'article"} number={totalPostCount}/>
                <Metric title={"Nombre de commentaire"} number={totalCommentCount}/>
                <Metric title={"PAS FAIT ENCORE"} number={21}/>
                <Metric title={"Taux d'appréciation"} number={appreciationRate} isPercent={true}/>
        </div>
    );
}

export default Metrics;