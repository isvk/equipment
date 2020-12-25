import React, { ReactNode } from "react";
import { Link } from "react-router-dom";

import "./ControlPanel.scss";

interface IControlPanelProps {
    links?: { url: string; label: ReactNode }[];
}

export default function ControlPanel(props: IControlPanelProps) {
    if (props.links) {
        return (
            <div className="controlPanel">
                {props.links.map((link) => (
                    <Link to={link.url} key={link.url + "-" + link.label}>
                        {link.label}
                    </Link>
                ))}
            </div>
        );
    }

    return <></>;
}
