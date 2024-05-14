import styles from "./_TextField.module.scss"

const TextField = (
    props: {
        placeholder: string;
        type?: string;
        style?: string;
    }
) => {
    return (
        <input className={styles.input+" "+(props.style ? styles[props.style] : '')} type={props.type} placeholder={props.placeholder}/>
    );
}

export default TextField;