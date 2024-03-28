import styled from "styled-components";
import {font} from "../../../../styles/Common";
import {theme} from "../../../../styles/Theme.ts";


export const TitleStyle = styled.span`
    position: absolute;
    top: 40%;
    font-style: normal;
    align-self: stretch;
    margin-bottom: 16px;
    ${font({
        weight: 600,
        Fmax: 150,
        Fmin: 50,
        color: '#fff',
        family: 'Epilogue, serif',
        lineHeight: 1.5,
    })}
`;
export const WorkWrapper = styled.a`
    margin: auto;
    transition: 2s;
    width: 100%;
    cursor: pointer;
    position: relative;
    &:hover::after {
        content: "нажми на окошко что бы перейти на сайт";
        position: absolute;
        bottom: 100%; 
        left: 50%;
        transform: translateX(-50%);
        padding: 0.5rem;
        background-color: #000;
        color: #fff;
        font-size: 14px;
        opacity: 0;
        transition: opacity 0.3s ease-in-out;
    }
    &:hover::after {
        opacity: 1; 
    }
    @media (max-width: 1240px) {
        display: flex;
        flex-direction: column;
        max-width: 100%;
        padding: 10% 10px;
        width: 100%;
        margin: 0 auto;
    }
    @media ${theme.media.mobile} {
        padding: 0;
    }
`;
export const Front = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: transform 1s ease-in 0s;
    backface-visibility: hidden;
    background-color: #fff;
    @media ${theme.media.tablet} {
        height: fit-content;
    }
`
export const Back = styled.div`
    transform: rotateX(180deg);
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    min-height: 500px;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: transform 1s ease-in 0s;
    backface-visibility: hidden;
    background-color: #000000;
    overflow: auto;
    scrollbar-width: thin;
    scrollbar-color: rgba(5, 3, 3, 0.45) black;
    @media ${theme.media.tablet} {
        height: fit-content;
    }
`
export const Card = styled.div`
    width: 100%;
    height: auto;
    object-fit: cover;
    perspective: 1500px;
    &:hover ${Front} {
        transform: rotateX(180deg);
    }

    &:hover ${Back} {
        transform: rotateX(360deg);
    }
`
export const BackgroundImage = styled.img`
    max-width: 100%;
    min-width: 100%;
    width: 100%;
    height: 100%;
    min-height: 500px;
    max-height: 37.5rem;
    object-fit: cover;
    object-position: center;
    display: block;
    position: relative;
`

export const WorkTextStyle = styled.span`
    font-style: normal;
    padding: 2rem;
    ${font({
        weight: 400,
        Fmax: 30,
        Fmin: 17,
        color: '#ffffff',
        family: 'Epilogue, sans-serif',
        lineHeight: 1.5,
    })}
`;