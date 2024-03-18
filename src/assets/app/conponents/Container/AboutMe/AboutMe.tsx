import SmallPhotoAboutMe from "../Photo/SmallPhotoAboutMe/SmallPhotoAboutMe.tsx";
import * as SC from "./AboutMe.style.ts";
import {TextAboutMe} from "./TextAboutMe/TextAboutMe.tsx";
import TextContent from "./TextContent/TextContent.tsx";
import BigPhotoAboutMe from "../Photo/BigPhotoAboutMe/BigPhotoAboutMe.tsx";


const AboutMe = () => {
    return (
        <SC.AboutMeHeader id={'About'}>
            <SC.Wrapper>
                <TextContent/>
                <BigPhotoAboutMe/>
            </SC.Wrapper>
            <SC.Wrapper>
                <TextAboutMe/>
                <SmallPhotoAboutMe/>
            </SC.Wrapper>
        </SC.AboutMeHeader>
    );
};
export default AboutMe;