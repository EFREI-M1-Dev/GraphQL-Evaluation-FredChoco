import { useState } from 'react';
import styles from "./_CardArticle.module.scss";

const CardArticle = (
    props: {
        className?: string;
        title: string;
        image: string;
        onclick?: () => void;
}) => {
    const { className, title, image, onclick } = props;
    const [isHovered, setIsHovered] = useState(false);

    const backgroundImage = isHovered
        ? `linear-gradient(to top, rgba(0, 0, 0, 1), rgba(0, 0, 0, .8), rgba(0, 0, 0, 0)), url(${image})`
        : `linear-gradient(to top, rgba(0, 0, 0, 1), rgba(0, 0, 0, .6), rgba(0, 0, 0, 0)), url(${image})`;

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
                <h2>{title}</h2>
            </div>
        </div>
    );
};

export default CardArticle;
