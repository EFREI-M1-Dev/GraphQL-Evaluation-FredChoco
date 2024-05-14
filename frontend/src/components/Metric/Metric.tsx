import styles from "./_Metric.module.scss";
import {useEffect, useState} from "react";

const Logo = (
    props:
        {
            title: string;
            number: number;
            isPercent?: boolean;
        }
) => {
    const [number, setNumber] = useState(props.number);

    useEffect(() => {
        let count = 0;
        const interval = setInterval(() => {
            if (count <= props.number) {
                setNumber(count);
                count++;
            } else {
                clearInterval(interval);
            }
        }, props.number/ 100);
        return () => clearInterval(interval);
    }, [props.number]);


    return (
        <div className={styles.container}>
            <h2>{number}{props.isPercent && "%"}</h2>
            <h1>{props.title}</h1>
        </div>
    );
}

export default Logo;