import * as SC from './footer.style.ts'
import {SocialMedia} from "./social media/social media.tsx";
import {Dispatch, FC, SetStateAction} from "react";
import {Profession} from "../../ui/profession/profession.tsx";

interface Interface {
    setOpenForm: Dispatch<SetStateAction<boolean>>
}

export const Footer:FC<Interface> = ({setOpenForm}) => {

    const clickOpenContacts = ()=> {
        setOpenForm(true)
        document.body.style.overflow = 'hidden'
    }

    return (
        <SC.FooterContainer>
            <SocialMedia/>
            <SC.NavWrapper>
                <SC.LinkScroll to={'projects'} smooth = { true } offset={-150}>Проекты</SC.LinkScroll>
                <SC.ButtonContacts onClick={clickOpenContacts}>Написать мне</SC.ButtonContacts>
            </SC.NavWrapper>
            <Profession text={'ФРОНТЕНД РАЗРАБОТЧИК 2024'}/>
        </SC.FooterContainer>
    );
};
