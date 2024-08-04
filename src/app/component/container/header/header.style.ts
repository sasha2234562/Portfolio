import styled from '@emotion/styled';
import {Link} from "react-scroll";

interface SelectContainerStyle {
    openOptions: boolean
}

export const Nav = styled.nav`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    margin-top: 30px;
`;
export const SelectContainer = styled.div<SelectContainerStyle>`
    border: 1px solid var(--color);
    border-radius: 8px;
    width: 100px;
    position: relative;
    -webkit-user-select: none; 
    -ms-user-select: none; 
    user-select: none;
    ${props => props.openOptions && `
    border-bottom: 1px solid transparent;
    border-bottom-right-radius: 0;
    border-bottom-left-radius: 0;
    `}
`
export const Select = styled.div`
    padding: 12px 20px;
    cursor: pointer;
`
export const SelectOptions = styled.ul<SelectContainerStyle>`
    display: flex;
    flex-direction: column;
    cursor: pointer;
    width: 100px;
    position: absolute;
    border: 1px solid var(--color);
    border-radius: 8px;
    border-top: none;
    margin-left: -1px;
    ${props => props.openOptions && `
    border-top: none;
    border-top-right-radius: 0;
    border-top-left-radius: 0;
    `}
    li {
        padding: 10px 20px;
        transition: 0.5s;

        &:hover {
            color: rgb(160, 197, 196);
            background-color: rgb(75, 94, 94);
        }
    }
`
export const LinkScroll = styled(Link)`
    background-color: transparent;
    color: var(--color);
    border: none;
    cursor: pointer;
`;
export const NavButtonWrapper = styled.div`
    display: flex;
    gap: 90px;
    align-items: center;
    @media screen and (max-width: 500px) {
        gap: 20px;
    }
`