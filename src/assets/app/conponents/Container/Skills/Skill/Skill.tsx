import * as SC from "./Skill.style";
import ModalWindow from "../../../ui/ModalWindow/ModalWindow.tsx";
import {FC, useState} from "react";
import {SkillProps} from "./Skill.type.ts";



const Skill: FC<SkillProps> = ({aboutSkill, logo, title, number}) => {
    const [active, setActive] = useState(false)
    const blur = () => {
        document.body.style.overflow = 'auto';
        setActive(false);
    }
    const open = () => {
        document.body.style.overflow = 'hidden';
        setActive(true)
    }

    return (
        <>
            <SC.SkillWrapper onClick={open} to={'Skills'} smooth duration={1000}>
                <SC.NumberSkill>{number}.</SC.NumberSkill>
                <SC.TextWrapper onClick={open}>
                    <SC.TitleStyle>{title}</SC.TitleStyle>
                    <img src={logo} alt="logo"/>
                    <SC.AboutSkillStyle>{aboutSkill}</SC.AboutSkillStyle>
                </SC.TextWrapper>
            </SC.SkillWrapper>
            <ModalWindow title={title} blur={blur} text={aboutSkill} active={active}/>
        </>
    );
};

export default Skill;