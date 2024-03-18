import Icon from "../../ui/Icon/Icon";
import {SocialStyle} from "./SocialIcons.style";
import github from '../../../../images/git-icon.svg'

const SocialIcons = () => {
    return (
        <SocialStyle>
            <a href="">
                <Icon IconId={'face'} height={'20px'} width={'20px'} />
            </a>
            <a
                href="https://www.instagram.com/ssasha535/"
                target={'_blank'}
                rel="noreferrer"
            >
                <Icon IconId={'inst'} height={'20px'} width={'20px'} />
            </a>
            <a
                href="https://github.com/sasha2234562"
                target={'_blank'}
                rel="noreferrer"
            >
                <img src={github} alt={'git-icon'} width={20} height={20}/>
                {/*<Icon IconId={'git'} height={'20px'} width={'20px'} />*/}
            </a>
            <a
                href="https://www.linkedin.com/in/alexander-kalitsenia-008271296/"
                target={'_blank'}
                rel="noreferrer"
            >
                <Icon IconId={'link'} height={'20px'} width={'20px'} />
            </a>
        </SocialStyle>
    );
};

export default SocialIcons;