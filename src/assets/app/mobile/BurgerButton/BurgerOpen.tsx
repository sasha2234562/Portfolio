import styled from "styled-components";
import {FC} from "react";
import {MobileMenuProps} from "../MobileMenu/MobileMenu.tsx";
import menu from '../../../images/menu.png'

export const BurgerOpen: FC<MobileMenuProps> = ({close}) => {
    return <BurgerMenu onClick={close} src={menu} alt=""/>;
}
export default BurgerOpen;
const BurgerMenu = styled.img`
    width: 1.5rem;
    height: 1.5rem;
    cursor: pointer;
`;