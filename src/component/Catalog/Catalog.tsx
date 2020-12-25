import React, { ReactNode } from "react";

import "./Catalog.scss";

interface ICatalogProps {
    head: ReactNode;
    navigation: ReactNode;
    control: ReactNode;
    content: ReactNode;
}

export default function Catalog(props: ICatalogProps) {
    return (
        <div className="catalog">
            <div className="head">{props.head}</div>
            <div className="body">
                <div className="navigation">{props.navigation}</div>
                <div className="main">
                    <div className="control">{props.control}</div>
                    <div className="content">{props.content}</div>
                </div>
            </div>
        </div>
    );
}
