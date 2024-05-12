import styles from "./_Logo.module.scss";

const Logo = (
    props:
        {
            size: "small" | "medium" | "large";
            animation?: "bounce";
            glow: boolean;
        }
) => {
    return (
        <div
            className={styles.loader + " " + (props.animation && styles[props.animation] || '')}>
            <div className={styles.logo+ " " + styles[props.size]}>
                <h1 className={props.glow ? "glow" : ""}>케이팝</h1>
                <h2 className={props.glow ? "glow" : ""}>Paris</h2>
            </div>
        </div>
    );
}

export default Logo;