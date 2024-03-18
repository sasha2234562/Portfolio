import {AboutSkillStyle, NumberSkill, SkillWrapper, TitleStyle} from "./Skill.style";
import ModalWindow from "../../../ui/ModalWindow/ModalWindow.tsx";
import {FC, useState} from "react";

interface SkillProps {
    number: string;
    title: string;
    aboutSkill: string;
};

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
            <SkillWrapper>
                <NumberSkill>{number}.</NumberSkill>
                <div style={{maxHeight: '180px', overflow: 'hidden'}} onClick={open}>
                    <TitleStyle>{title}</TitleStyle>
                    <AboutSkillStyle>{aboutSkill}</AboutSkillStyle>
                </div>
            </SkillWrapper>
            <ModalWindow blur={blur} text={aboutSkill} active={active}/>
        </>
    );
};

export default Skill;