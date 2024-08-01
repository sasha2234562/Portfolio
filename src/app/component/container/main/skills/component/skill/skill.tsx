import * as SC from './skills.style.ts'
import {FC} from "react";

interface SkillInterface {
    title: string
    logo: string
}

export const Skill: FC<SkillInterface> = ({title, logo}) => {
    return (
        <SC.SkillWrapper>
            <img src={logo} alt={title}/>
            <SC.SkillTitle>{title}</SC.SkillTitle>
        </SC.SkillWrapper>
    );
};
