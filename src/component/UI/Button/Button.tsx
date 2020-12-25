import React, { MouseEvent, ReactNode } from "react";

import "./Button.scss";

interface IButtonProps {
    className?: string;
    children?: ReactNode;
    onClick?: (e: MouseEvent<HTMLButtonElement>) => void;
    disabled?: boolean;
}

export default function Button(props: IButtonProps) {
    return (
        <button {...props} className={"button " + props.className}>
            {props.children}
        </button>
    );
}
