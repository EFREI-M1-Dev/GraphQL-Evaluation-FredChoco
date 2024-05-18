import styles from "./_TextField.module.scss"
import React from "react";
import classNames from "classnames";

const TextField = (
    props: {
        placeholder: string;
        type?: string;
        style?: "text" | "password" | "search" | "area"
        value?: string;
        onChange?: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
        className?: string;
        defaultNumberOfRows?: number;
    }
) => {

    const inputClassName = classNames(
        styles.global,
        styles.input,
        props.style && styles[props.style],
        props.className
    );

    const textAreaClassName = classNames(
        styles.global,
        styles.area,
        props.style && styles[props.style],
        props.className
    );

    if (props.type === "area") {
        return (
            <textarea
                className={textAreaClassName}
                placeholder={props.placeholder}
                value={props.value}
                onChange={props.onChange}
                rows={10}

            />
        );
    }

    return (
        <input
            className={inputClassName}
            type={props.type || "text"}
            placeholder={props.placeholder}
            value={props.value}
            onChange={props.onChange}
        />
    );
}

export default TextField;