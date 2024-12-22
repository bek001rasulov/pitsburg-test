import {ComponentProps, ReactNode} from "react";
import {cn} from "@/utils/classnames";

import styles from "./Button.module.scss"


interface IButtonProps extends ComponentProps<'button'> {
    children: ReactNode;
    className?: string;
}

const Button = ({children, className, ...props}: IButtonProps) => {
    return (
        <button
            className={cn(styles.button, className)}
            {...props}
        >
            <span>{children}</span>
        </button>
    );
};

export default Button;