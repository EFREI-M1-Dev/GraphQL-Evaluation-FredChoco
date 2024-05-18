import {useState} from 'react';
import styles from "./_CardArticle.module.scss";
import {Link} from "react-router-dom";

const CardArticle = (
    props: {
        className?: string;
        title: string;
        image: string;
        authorUsername: string;
        onclick?: () => void;
        likes?: number;
        dislikes?: number;
    }) => {
    const {className, title, image, onclick} = props;
    const [isHovered, setIsHovered] = useState(false);

    const backgroundImage = isHovered
        ? `linear-gradient(to top, rgba(0, 0, 0, 1), rgba(0, 0, 0, .8), rgba(0, 0, 0, 0)), url(${image})`
        : `linear-gradient(to top, rgba(0, 0, 0, 1), rgba(0, 0, 0, .6), rgba(0, 0, 0, 0)), url(${image})`;

    const capitalize = (s: string) => {
        const str = s.toLowerCase();
        return str.charAt(0).toUpperCase() + str.slice(1);
    }

    return (
        <div
            className={`${styles.container} ${className || ''}`}
            onClick={onclick}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            style={{
                backgroundImage: backgroundImage,
            }}
        >
            <div className={styles.section}>
                <h2>{capitalize(title)}</h2>
                <div className={styles.author}>
                    <Link to={`author/${props.authorUsername}`}>Par <i>{capitalize(props.authorUsername)}</i></Link>
                    <div className={styles.containerStat}>
                        <div className={styles.stat} >
                            <img className={styles.icon} src={'/pictograms/like.svg'}/>
                            <span>{props.likes || 0}</span>
                        </div>
                        <div className={styles.stat}>
                            <img className={styles.icon} src={'/pictograms/dislike.svg'}/>
                            <span>{props.dislikes || 0}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CardArticle;
