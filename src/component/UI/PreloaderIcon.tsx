import React from "react";
import styled from "styled-components";
import { Loader5 } from "@styled-icons/remix-fill/Loader5";

interface IPreloaderIconProps {
    className?: string;
    size?: number | string;
}

export default function PreloaderIcon(props: IPreloaderIconProps) {
    return <PreloaderIconStyled {...props} />;
}

const PreloaderIconStyled = styled(Loader5)`
    animation: rotate 2s linear infinite;

    @keyframes rotate {
        100% {
            transform: rotate(360deg);
        }
    }
`;
