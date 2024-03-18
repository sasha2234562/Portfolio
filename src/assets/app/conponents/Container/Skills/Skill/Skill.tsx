import * as SC from "./Skill.style";
import ModalWindow from "../../../ui/ModalWindow/ModalWindow.tsx";
import {FC, useState} from "react";
import {SkillProps} from "./Skill.type.ts";


const Skill: FC<SkillProps> = ({aboutSkill, title, number}) => {
    const [active, setActive] = useState(false)
    const blur = () => {
        const rootElement = document.getElementById('root');
        if (rootElement) {
            setActive(false)
            rootElement.style.overflow = 'auto';
        }
    }
    const open = () => {
        const rootElement = document.getElementById('root');
        if (rootElement) {
            rootElement.style.overflow = 'hidden';
            setActive(true)
        }
    }

    return (
        <>
            <SC.SkillWrapper>
                <SC.NumberSkill>{number}.</SC.NumberSkill>
                <SC.TextWrapper onClick={open}>
                    <SC.TitleStyle>{title}</SC.TitleStyle>
                    <SC.AboutSkillStyle>{aboutSkill}</SC.AboutSkillStyle>
                </SC.TextWrapper>
            </SC.SkillWrapper>
            <ModalWindow title={title} blur={blur} text={aboutSkill} active={active}/>
        </>
    );
};

export default Skill;