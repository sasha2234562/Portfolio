import * as SC from './MobileMenu.style.ts'
import SocialIcons from "../../conponents/Container/SocialIcons/SocialIcons.tsx";
import BurgerButton from '../BurgerButton/BurgerButton.tsx';
import {FC} from "react";
import {Link} from "react-scroll";

export interface MobileMenuProps {
    close: () => void
}

const MobileMenu: FC<MobileMenuProps> = ({close}) => {
    return (
        <SC.MobileMenuContainer>
            <SC.MobileMenuWrapper>
                <SC.BurgerButtonWrapper>
                    <BurgerButton close={close}/>
                </SC.BurgerButtonWrapper>
                <Link to="Projects" smooth duration={1000} onClick={close}>Projects</Link>
                <Link to="About" smooth duration={1000} onClick={close}>About</Link>
                <Link to="Digital Assets" smooth duration={1000} onClick={close}>Digital Assets</Link>
            </SC.MobileMenuWrapper>
            <SC.SocialIconsWrapper>
                <SocialIcons/>
            </SC.SocialIconsWrapper>
        </SC.MobileMenuContainer>
    );
};
export default MobileMenu;