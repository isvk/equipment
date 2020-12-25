import React, { ReactNode } from "react";

import "./Header.scss";

interface IHeaderProps {
    className?: string;
    children?: ReactNode;
}

export default function Header(props: IHeaderProps) {
    return (
        <div {...props} className={"header " + props.className}>
            {props.children}
        </div>
    );
}
