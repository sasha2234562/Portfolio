import * as SC from './skills.style.ts'
import {Section} from "../../../ui";
import {SectionTitle} from "../../../ui";
import icon from '../../../../../assets/skill-icon/javascript.svg'
import {Skill} from "./component/skill/skill.tsx";

export const Skills = () => {
    return (
        <Section>
            <SectionTitle title={'Skills'}/>
            <SC.SkillsWrapper>
                <Skill title={'Java Script'} logo={icon as string}/>
                <Skill title={'Java Script'} logo={icon as string}/>
                <Skill title={'Java Script'} logo={icon as string}/>
                <Skill title={'Java Script'} logo={icon as string}/>
                <Skill title={'Java Script'} logo={icon as string}/>
                <Skill title={'Java Script'} logo={icon as string}/>
                <Skill title={'Java Script'} logo={icon as string}/>
                <Skill title={'Java Script'} logo={icon as string}/>
                <Skill title={'Java Script'} logo={icon as string}/>
                <Skill title={'Java Script'} logo={icon as string}/>
                <Skill title={'Java Script'} logo={icon as string}/>
                <Skill title={'Java Script'} logo={icon as string}/>
            </SC.SkillsWrapper>
        </Section>
    );
};
