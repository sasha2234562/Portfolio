import {SocialStyle} from "./SocialIcons.style";
import github from '../../../../images/git-icon.svg';
import inst from '../../../../images/inst.svg';
import link from '../../../../images/link.svg';

const SocialIcons = () => {
    return (
        <SocialStyle>
            <a
                href="https://www.instagram.com/ssasha535/"
                target={'_blank'}
                rel="noreferrer"
            >
                <img src={inst} alt={'git-icon'} width={20} height={20}/>
            </a>
            <a
                href="https://github.com/sasha2234562"
                target={'_blank'}
                rel="noreferrer"
            >
                <img src={github} alt={'git-icon'} width={19} height={19}/>
            </a>
            <a
                href="https://www.linkedin.com/in/alexander-kalitsenia-008271296/"
                target={'_blank'}
                rel="noreferrer"
            >
                <img src={link} alt={'git-icon'} width={20} height={20}/>
            </a>
        </SocialStyle>
    );
};

export default SocialIcons;