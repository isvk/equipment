import React, { ReactNode } from "react";
import ReactDOM from "react-dom";

import "./Modal.scss";

interface IModalProps {
    title: string;
    onClose(): void;
    children: ReactNode;
}

export default function Modal(props: IModalProps) {
    const domElement = document.getElementById("modal-root");

    if (domElement) {
        return ReactDOM.createPortal(
            <div id="openModal" className="modal">
                <div className="modalDialog">
                    <div className="modalContent">
                        <div className="modal-header">
                            <h3 className="modalTitle">{props.title}</h3>
                            <span title="Close" className="close" onClick={props.onClose}>
                                ×
                            </span>
                        </div>
                        <div className="modalBody">{props.children}</div>
                    </div>
                </div>
            </div>,
            domElement
        );
    } else return <></>;
}
