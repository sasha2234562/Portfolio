import * as SC from './footer.style.ts'
import {SocialMedia} from "./social media/social media.tsx";

export const Footer = () => {

    return (
        <SC.FooterContainer>
            <SocialMedia/>
            <SC.NavWrapper>
                <span>Projects</span>
                <span>Contact</span>
            </SC.NavWrapper>
            <h2>WEB DEVELOPER 2024</h2>
        </SC.FooterContainer>
    );
};
