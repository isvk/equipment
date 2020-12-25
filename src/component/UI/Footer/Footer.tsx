import React, { ReactNode } from "react";

import "./Footer.scss";

interface IFooterProps {
    className?: string;
    children?: ReactNode;
}

export default function Footer(props: IFooterProps) {
    return (
        <div {...props} className={"footer " + props.className}>
            {props.children}
        </div>
    );
}
