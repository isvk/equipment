import React from "react";
import { FaTimesCircle as WarningIcon } from "react-icons/fa";
import { FaSpinner as PreloadIcon } from "react-icons/fa";

import "./Alert.scss";

interface IAlertProps {
    type: "preload" | "warning";
    text: string;
}

export default function Alert(props: IAlertProps) {
    return (
        <div className="alert">
            {props.type === "preload" && (
                <>
                    <PreloadIcon className="preloadIcon" /> {props.text}
                </>
            )}
            {props.type === "warning" && (
                <>
                    <WarningIcon className="warningIcon" /> {props.text}
                </>
            )}
        </div>
    );
}
