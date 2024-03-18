import styled from "styled-components";
import {font} from "../../../../styles/Common";


export const BoxStyle = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 432px;
    height: auto;
`;
export const TitleStyle = styled.span`
    font-style: normal;
    align-self: stretch;
    margin-bottom: 16px;
    ${font({
        weight: 600,
        Fmax: 16,
        Fmin: 15,
        color: '#fff',
        family: 'Epilogue, serif',
        lineHeight: 1.5,
    })}
`;
export const WorkWrapper = styled.div`
    background-repeat: no-repeat;
    padding: 10%;
    margin: auto;
    height: auto;
    background-position: 0 0;
    background-size: 100% 100%;
    @media (max-width: 1240px) {
        display: flex;
        flex-direction: column;
        max-width: 100%;
        padding: 10% 10px;
        width: 100%;
        margin: 0 auto;
    }
`;
export const WorkTextStyle = styled.span`
    font-family: Epilogue, sans-serif;
    text-shadow: #fc0 1px 0 10px;
    font-style: normal;
    font-weight: 400;
    ${font({
        weight: 400,
        Fmax: 18,
        Fmin: 17,
        color: '#ffffff',
        family: 'Epilogue, sans-serif',
        lineHeight: 1.5,
    })}
`;
export const PracticalStyle = styled.span`
    font-style: normal;
    font-weight: 200;
    width: 40%;
    ${font({
        weight: 200,
        Fmax: 45,
        Fmin: 43,
        color: '#fff',
        family: 'Epilogue, sans-serif',
    })}
`;
export const RecommendationStyle = styled.div`
    max-width: 433px;
    font-style: normal;
    ${font({
        weight: 800,
        Fmax: 45,
        Fmin: 43,
        color: '#fff',
        family: 'Epilogue, sans-serif',
    })}
`;

export const TextWrapperStyle = styled.div`
    display: inline-grid;
    grid-template-columns: repeat(auto-fit, minmax(320px, 30%));
    gap: 80px;
    justify-content: center;
`;
