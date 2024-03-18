import {FlexWrapper} from "../../ui/FlexWraper/FlexWraper";
import {Logo} from "../../ui/Logo/Logo";
import * as SC from "./Header.style";
import {Navigate} from "../Navigate/Navigate.tsx";

const Header = () => {
    return (
        <SC.Container>
            <SC.StyledHeader>
                <FlexWrapper justify={'space-between'} align={'center'}>
                    <Logo />
                    <Navigate />
                </FlexWrapper>
            </SC.StyledHeader>
        </SC.Container>
    );
};

export default Header;