import styles from "./_Footer.module.scss";
import {Link} from "react-router-dom";
import {useEffect, useState} from "react";

const Footer = () => {
    const [commitSha, setCommitSha] = useState<string>("");

    useEffect(() => {
        const fetchCommitSha = async () => {
            try {
                const response = await fetch("https://api.github.com/repos/EFREI-M1-Dev/GraphQL-Evaluation-FredChoco/commits/main ");
                const data = await response.json();
                setCommitSha(data.sha);
            } catch (error) {
                console.error(error);
            }
        };
        fetchCommitSha().then().catch((error) => console.error(error));
    }, []);

    return (
        <div className={"glow"+" "+styles.container}>
            <div className={styles.section}>
                <p>© 2024 케이팝. All rights reserved.</p><br />
            </div>
            <div className={styles.section}>
                <p>
                    Designed & Created by
                    <Link to={"https://github.com/Fredray-21"} target="_blank" rel="noopener noreferrer" className={styles.link}> Fredray21 </Link>
                    &
                    <Link to={"https://github.com/Chocolatiines"} target="_blank" rel="noopener noreferrer" className={styles.link}> Chocolatiines </Link>
                    | Commit:
                    <Link to={`https://github.com/EFREI-M1-Dev/GraphQL-Evaluation-FredChoco/commit/${commitSha}`} target="_blank" rel="noopener noreferrer" className={styles.link}> {commitSha.slice(0, 10)+"..."} </Link>
                </p>
            </div>
        </div>
    )
}
export default Footer;
