import * as SC from './project.style.ts';
import {FC} from "react";
import link_icon from '../../../../../../assets/icons/link.svg';

interface ProjectInterface {
    titleProject: string
    instrument: string[]
    description: string
    logo: string
    link: string
}

export const Project: FC<ProjectInterface> = ({titleProject, link, logo, instrument, description}) => {
    return (
            <SC.Container>
                <SC.Link href={link} target={"_blank"}>
                    <span>Перейти на сайт </span>
                    <img src={link_icon} alt="link"/>
                </SC.Link>
                <SC.ProjectLogo src={logo} alt="project"/>
                <SC.TextContentWrapper>
                    <SC.TitleProject>{titleProject}</SC.TitleProject>
                    <SC.StackContainer>
                        {instrument.map((item, index) => {
                            return <SC.Stack key={index}>{item}</SC.Stack>
                        })}
                    </SC.StackContainer>
                    <SC.Description>{description}</SC.Description>
                </SC.TextContentWrapper>
            </SC.Container>
    );
};
