import {FlexWrapper} from "../../ui/FlexWraper/FlexWraper";
import {Logo} from "../../ui/Logo/Logo";
import * as SC from "./Header.style";
import {Navigate} from "../Navigate/Navigate.tsx";
import MobileMenu from "../../../mobile/MobileMenu/MobileMenu.tsx";
import {useState} from "react";

const Header = () => {
    const [activeMobileMenu, setActiveMobileMenu] = useState(false)
    const close = ()=> {
        setActiveMobileMenu(!activeMobileMenu)
        document.body.style.overflow = activeMobileMenu ? 'auto' : 'hidden';

    }
    return (
        <SC.Container>
            <SC.StyledHeader>
                <FlexWrapper justify={'space-between'} align={'center'}>
                    <Logo/>
                    <Navigate close={close}/>
                </FlexWrapper>
            </SC.StyledHeader>
            {activeMobileMenu && <MobileMenu close={close}/>}
        </SC.Container>
    );
};

export default Header;