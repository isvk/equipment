import React, { ChangeEvent } from "react";

import "./FieldInput.scss";

interface IFieldInputProps {
    className?: string;
    value?: string;
    onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
    placeholder?: string;
    type?: string;
    autoComplete?: string;
    id?: string;
    min?: string;
    max?: string;
}

export default function FieldInput(props: IFieldInputProps) {
    return <input {...props} className={"input " + props.className} />;
}
