import styles from "./_Metrics.module.scss"
import Metric from "../Metric/Metric";
import {gql, useQuery} from "@apollo/client";
import {useEffect, useState} from "react";

export const STATISTICS = gql`
query STATISTICS_Query {
  getTotalPostCount
  getTotalCommentCount
  getAppreciationRate
  getUserCount
}
`;


const Metrics = () => {
    const [totalPostCount, setTotalPostCount] = useState<number>(0);
    const [totalCommentCount, setTotalCommentCount] = useState<number>(0);
    const [appreciationRate, setAppreciationRate] = useState<number>(0);
    const [userCount, setUserCount] = useState<number>(0);

    const { data } = useQuery(STATISTICS);

    useEffect(() => {
        if (data)
        {
            setTotalPostCount(data.getTotalPostCount);
            setTotalCommentCount(data.getTotalCommentCount);
            setAppreciationRate(data.getAppreciationRate);
            setUserCount(data.getUserCount)
        }
    }, [data]);


    return (
        <div className={styles.container}>
                <Metric title={"Nombre d'articles"} number={totalPostCount}/>
                <Metric title={"Nombre de commentaires"} number={totalCommentCount}/>
                <Metric title={"Nombre d'utilisateurs"} number={userCount}/>
                <Metric title={"Taux d'appréciation"} number={appreciationRate} isPercent={true}/>
        </div>
    );
}

export default Metrics;