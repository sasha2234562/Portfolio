import {FlexWrapper} from "../../ui/FlexWraper/FlexWraper";
import {Logo} from "../../ui/Logo/Logo";
import {Container, StyledHeader} from "./Header.style";
import {Navigate} from "../Navigate/Navigate.tsx";

const Header = () => {
    return (
        <Container>
            <StyledHeader>
                <FlexWrapper justify={'space-between'} align={'center'}>
                    <Logo />
                    <Navigate />
                </FlexWrapper>
            </StyledHeader>
        </Container>
    );
};

export default Header;