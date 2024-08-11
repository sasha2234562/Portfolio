import styled from "@emotion/styled";
import {Link} from "react-scroll";

export const FooterContainer = styled.footer`
    display: flex;
    flex-direction: column;
    gap: 48px;
    width: min(100%, 420px);
    margin: auto;
    text-align: center;
`
export const NavWrapper = styled.div`
    display: flex;
    justify-content: center;
    gap: 48px;
    width: 100%;
`
export const LinkScroll = styled(Link)`
    cursor: pointer;
`
export const ButtonContacts = styled.button`
    background-color: transparent;
    border: none;
    color: var(--color);
    font-family: Montserrat,sans-serif;
    font-size: 14px;
    font-weight: 400;
    line-height: 17px;
    letter-spacing: 0;
    text-align: left;
    cursor: pointer;
`
export const Profession = styled.h2`
    color: var(--color-light);
    font-family: Tinos, sans-serif;
    font-size: 26px;
    font-weight: 400;
    line-height: 23px;
    letter-spacing: 0;
    text-align: left;
`