import {font} from "../../../styles/Common"
import styled from "styled-components";

export const PhotoContainer = styled.div`
    margin-right: 7.25rem;
    position: relative;
    &::before {
        content: '';
        position: absolute;
        transform: rotate(-8.699deg);
        background-color: rgb(231, 231, 231);
        max-width: 35.63rem;
        max-height: 35.63rem;
        width: 100%;
        display: flex;
        height: 100%;
        background-size: 50vw auto;
        object-fit: cover;
    }
`;
export const Photo = styled.img`
    max-width: 35.63rem;
    width: 100%;
    min-width: 300px;
    max-height: 35.63rem;
    height: 100%;
    object-fit: cover;
    opacity: 0.9;
    transform: rotate(7.517deg);
    display: flex;
    background-size: 50vw auto;

    @media (max-width: 960px) {
        width: 50vw;
        max-width: 300px;
        max-height: 300px;
        margin: 0 auto;
    }
`
export const StyledMain = styled.section`
    margin-top: 132px;
    color: #2d2c2c;
    @media (max-width: 960px) {
        div {
            flex-direction: column;
            justify-content: center;
            margin: auto;
        }
    }
`;
export const StyleTextBlock = styled.div`
    z-index: 1;
    white-space: nowrap;
    position: relative;
    @media (max-width: 960px) {
        left: 0;
    }
`;
export const NameStyle = styled.span`
    ${font({weight: 800, Fmax: 150, Fmin: 75})}
    font-style: normal;
    line-height: 117.5%;
    text-align: left;
    max-width: 650px;
`;
