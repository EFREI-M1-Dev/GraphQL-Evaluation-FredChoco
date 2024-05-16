import React from "react";
import styles from "./_Button.module.scss";
import {Link} from "react-router-dom";

const Button = (
    props:
        {
            route?: string;
            children: React.ReactNode,
            style: "primary" | "header";
            className?: string;
            onClick?: React.MouseEventHandler<HTMLButtonElement>
        }) => {


    const isCurrentPath = props.style === "header" && (window.location.pathname.split("/").pop() === props.route);

    const button = (
        <button
            className={styles.button + " " + styles[props.style]+ " "+(props.className || '')+" "+(isCurrentPath ? 'glow' : '')}
            onClick={props.onClick}
        >
            {props.children}
        </button>
    )

    if (props.route) {
        return (
            <Link to={props.route} className={styles.link} >
                {button}
            </Link>
        )
    }
    return (button)
}
export default Button;