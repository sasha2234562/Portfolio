import styled from "styled-components";
import {theme} from "../../styles/Theme.ts";
import {font} from "../../styles/Common.ts";

export const BurgerButtonWrapper = styled.div`
    position: absolute;
    display: block;
    right: 2rem;
    top: 2rem;
`;
export const MobileMenuContainer = styled.div`
    z-index: 1000;
    display: none;
    position: absolute;
    top: 0;
    width: 100%;
    height: 300px;
    transition: 1s;
    background-color: ${theme.colors.mobMenu};
    @media ${theme.media.tablet} {
        display: block;
    }
`;
export const MobileMenuWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin: 45px 36px 0 26px;
    ${font({Fmax: 20, Fmin: 14,weight: 400, lineHeight: 1.5, family: 'Epilogue, sans-serif', color: `${theme.colors.line}`})}
    font-style: normal;

    p {
        display: inline;
        cursor: pointer;
        margin: 0;
        padding-bottom: 1rem;
        border-bottom: 1px solid ${theme.colors.line};
    }

    hr {
        width: 100%;
    }
`;
export const SocialIconsWrapper = styled.div`
    display: flex;
    margin: 1rem 1.5rem;
`;
