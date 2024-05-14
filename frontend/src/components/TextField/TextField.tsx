import styles from "./_TextField.module.scss"
import React from "react";

const TextField = (
    props: {
        placeholder: string;
        type?: string;
        style?: string;
        value?: string;
        onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
        className?: string;
    }
) => {
    return (
        <input
            className={styles.input + " " + (props.style ? styles[props.style] : '') + " " + (props.className ? props.className : '')}
            type={props.type}
            placeholder={props.placeholder}
            value={props.value}
            onChange={props.onChange}
        />
    );
}

export default TextField;