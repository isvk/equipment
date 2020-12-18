import React from "react";
import styled from "styled-components";
import { Warning as WarningStyledIcon } from "@styled-icons/entypo/Warning";
import PreloaderIcon from "src/component/UI/PreloaderIcon";

interface IAlertProps {
    type: "preload" | "warning";
    text: string;
}

export default function Alert(props: IAlertProps) {
    return (
        <Wrapper>
            {props.type === "preload" && (
                <>
                    <PreloaderIconStyled size="28" /> {props.text}
                </>
            )}
            {props.type === "warning" && (
                <>
                    <WarningIcon size="28" /> {props.text}
                </>
            )}
        </Wrapper>
    );
}

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 50% 0;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 28px;
    color: #4a4a4a;
`;

const PreloaderIconStyled = styled(PreloaderIcon)`
    color: #2196f3;
`;

const WarningIcon = styled(WarningStyledIcon)`
    color: #ff0000;
`;
