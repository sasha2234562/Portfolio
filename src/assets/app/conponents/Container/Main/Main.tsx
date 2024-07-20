import {FlexWrapper} from "../../ui/FlexWraper/FlexWraper";
import * as SC from "./Main.style";
import photo from '../../../../images/photo_2023-12-17_13-26-22.jpg'

const Main = () => {
    return (
        <SC.StyledMain>
            <FlexWrapper align={'top'} justify={'space-around'}>
                <SC.StyleTextBlock>
                    <SC.NameStyle>
                        HELLO <br/> I’M Sasha
                    </SC.NameStyle>
                    <SC.Post>Frontend Developer</SC.Post>
                </SC.StyleTextBlock>
                <SC.PhotoContainer>
                    <SC.Photo src={photo} alt="photo"/>
                </SC.PhotoContainer>
            </FlexWrapper>
        </SC.StyledMain>
    );
};

export default Main;