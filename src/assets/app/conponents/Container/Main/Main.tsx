'use client';
import {FlexWrapper} from "../../ui/FlexWraper/FlexWraper";
import {Circle} from '../../ui/Circle/Circle';
import {NameStyle, Photo, PhotoContainer, StyledMain, StyleTextBlock} from "./Main.style";
import photo from '../../../../images/photo_2023-12-17_13-26-22.jpg'

const Main = () => {
    return (
        <StyledMain>
            <FlexWrapper align={'top'} justify={'space-around'}>
                <StyleTextBlock>
                    <NameStyle>
                        HELLO <br/> I’M Sasha
                    </NameStyle>
                    <Circle/>
                </StyleTextBlock>
                <PhotoContainer>
                    <Photo src={photo} alt="photo"/>
                </PhotoContainer>
            </FlexWrapper>
        </StyledMain>
    );
};

export default Main;