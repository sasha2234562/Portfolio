import * as SC from './project.style.ts'
import {FC} from "react";

interface ProjectInterface {
    titleProject: string
    instrument: string[]
    description: string
    logo: string
}

export const Project: FC<ProjectInterface> = ({titleProject, logo, instrument, description}) => {
    return (
        <SC.Container>
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
