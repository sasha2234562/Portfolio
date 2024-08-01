import email from '../../../../../assets/links-icon/mail.svg';
import git from '../../../../../assets/links-icon/git.svg';
import linkedin from '../../../../../assets/links-icon/linkedin.svg';
import {SocialNetwork} from "../../../ui/social-network/social-network.tsx";
import * as SC from './social media.style.ts'

export const SocialMedia = () => {
    return (
        <SC.Container>
            <SocialNetwork label={'EMAIL'} icon={email as string} link={'skalitsenia@mail.ru'} />
            <SocialNetwork label={'LINKEDIN'} icon={linkedin as string}
                           link={'https://www.linkedin.com/in/alexander-kalitsenia-008271296/'} />
            <SocialNetwork label={'GITHUB'} icon={git as string} link={'https://github.com/sasha2234562'}/>
        </SC.Container>
    );
};
