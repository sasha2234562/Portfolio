import * as SC from './skills.style.ts'
import {Section} from "../../../ui";
import {SectionTitle} from "../../../ui";
import javascript from '../../../../../assets/skill-icon/javascript.svg'
import git from '../../../../../assets/skill-icon/git.svg'
import react from '../../../../../assets/skill-icon/react.svg'
import redux from '../../../../../assets/skill-icon/redux.svg'
import typeScript from '../../../../../assets/skill-icon/typeScript.svg'
import AngularJS from '../../../../../assets/skill-icon/AngularJS_logo_004.svg'
import scss from '../../../../../assets/skill-icon/scss.svg'
import {Skill} from "./component/skill/skill.tsx";

export const Skills = () => {
    return (
        <Section>
            <SectionTitle id={'skills'} title={'Навыки'}/>
            <SC.SkillsWrapper>
                <Skill title={'Java Script'} logo={javascript as string}/>
                <Skill title={'Type Script'} logo={typeScript as string}/>
                <Skill title={'Angular'} logo={AngularJS as string}/>
                <Skill title={'React'} logo={react as string}/>
                <Skill title={'Redux'} logo={redux as string}/>
                <Skill title={'Scss'} logo={scss as string}/>
                <Skill title={'Git'} logo={git as string}/>
            </SC.SkillsWrapper>
        </Section>
    );
};
