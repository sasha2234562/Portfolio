import styled, { keyframes } from "styled-components";
import { theme } from "../../../styles/Theme.ts";
import {font} from "../../../styles/Common.ts";

export interface ContainerProps {
    active: boolean;
}

const rotateAnimation = keyframes`
    0% {
        transform: translate(-50%, -50%) rotate(0deg);
    }
    50% {
        transform: translate(-50%, -50%) rotate(360deg);
    }
    100% {
        transform: translate(-50%, -50%) rotate(720deg);
    }
`;
const rotateAnimationOut = keyframes`
    0% {
        transform: translate(-50%, -50%) rotate(0deg);
    }
    50% {
        transform: translate(-50%, -50%) rotate(-360deg);
    }
    100% {
        transform: translate(-50%, -50%) rotate(-720deg);
    }
`;

export const Container = styled.div<ContainerProps>`
    display: flex;
    padding: 1rem;
    border-radius: 1rem;
    position: fixed;
    width: 100%;
    top: 0;
    left: ${(props) => (!props.active ? "-150%" : "0")};
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.5);
    transition: 3s;
`;

export const TextWrapper = styled.div<ContainerProps>`
    background-color: ${theme.colors.primary};
    display: flex;
    color: ${theme.colors.secondary};
    position: relative;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) rotate(0deg);
    padding: 2rem;
    border-radius: 1rem;
    width: 20%;
    z-index: 99999;
    height: fit-content;
    animation: ${(props)=> props.active ? rotateAnimation : rotateAnimationOut} 2s linear forwards;
    ${font({
        weight: 200,
        Fmax: 18,
        Fmin: 14,
        color: `${theme.colors.secondary}`,
        family: 'Epilogue, sans-serif',
    })}
`;

export const Exit = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    padding: 6px;
    border-radius: 0.75rem;
    right: -3rem;
    top: 0;
    background-color: silver;
    height: fit-content;
`;