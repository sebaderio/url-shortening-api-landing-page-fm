import { MouseEventHandler } from "react";

import styles from "./Button.module.scss";

interface ButtonProps {
    children: React.ReactNode;
    onClick: MouseEventHandler<HTMLDivElement>;
    primary: boolean;
    rounded: boolean;
}

const Button = ({ children, onClick, primary, rounded }: ButtonProps) => {
    return (
        <div
            className={`${styles.button__container} ${
                rounded ? styles.rounded : ""
            }`}
        >
            <div
                className={`${styles.button} ${primary ? styles.primary : ""}`}
                onClick={onClick}
            >
                {children}
            </div>
        </div>
    );
};

export default Button;
