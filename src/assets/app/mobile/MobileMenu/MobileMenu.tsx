import * as SC from './MobileMenu.style.ts'
import SocialIcons from "../../conponents/Container/SocialIcons/SocialIcons.tsx";
import BurgerButton from '../BurgerButton/BurgerButton.tsx';
import {FC} from "react";

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
                <p>Projects</p>
                <p>About</p>
                <p>Digital Assets</p>
            </SC.MobileMenuWrapper>
            <SC.SocialIconsWrapper>
                <SocialIcons/>
            </SC.SocialIconsWrapper>
        </SC.MobileMenuContainer>
    );
};
export default MobileMenu;