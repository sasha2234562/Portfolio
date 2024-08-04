import * as SC from './header.style.ts';
import {Button} from "../../ui";
import {Dispatch, FC, SetStateAction, useState} from "react";

interface Interface {
    setOpenForm: Dispatch<SetStateAction<boolean>>;
}

export const Header: FC<Interface> = ({setOpenForm}) => {
    const [openOptions, setOpenOptions] = useState(false)
    const [language, setLanguage] = useState('Русский')
    const clickOpenForm = () => {
        setOpenForm(true)
        document.body.style.overflow = 'hidden'
    }

    const clickOpenOptions = () => {
        setOpenOptions(prevState => !prevState)
    }
    const onClickLanguage = (language: string) => {
        setLanguage(language)
        setOpenOptions(false)
    }
    return (
        <SC.Nav>
            <SC.NavButtonWrapper>
                <SC.SelectContainer openOptions={openOptions}>
                    <SC.Select onClick={clickOpenOptions}>{language}</SC.Select>
                    {openOptions && <SC.SelectOptions openOptions={openOptions}>
                        <li onClick={() => onClickLanguage('Русский')}>Русский</li>
                        <li onClick={() => onClickLanguage('English')}>English</li>
                    </SC.SelectOptions>}
                </SC.SelectContainer>
                <SC.LinkScroll to={'projects'} smooth={true} offset={-150}>Проекты</SC.LinkScroll>
                <SC.LinkScroll to={'skills'} smooth={true} offset={-150}>Навыки</SC.LinkScroll>
                <Button clickButton={clickOpenForm} title={'Написать мне'}/>
            </SC.NavButtonWrapper>
        </SC.Nav>
    );
};
