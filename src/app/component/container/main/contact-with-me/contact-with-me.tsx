import * as SC from './contact-with-me.style.ts'
import {Button, SectionTitle} from "../../../ui";
import {Input} from "../../../ui/input/input.tsx";
import {Textarea} from "../../../ui/textarea/textarea.tsx";
import exit from '../../../../../assets/icons/exit.svg'
import {Dispatch, FC, SetStateAction} from "react";

interface Interface {
    openForm: boolean
    setOpenForm: Dispatch<SetStateAction<boolean>>
}

export const ContactWithMe: FC<Interface> = ({openForm, setOpenForm}) => {

    const clickCloseWindow = () => {
        setOpenForm(false)
        document.body.style.overflow = 'auto'
    }

    return (
        <SC.Section openForm={openForm}>
            <SC.FormContainer openForm={openForm}>
                <SectionTitle id={'contacts'} title={'Написать мне'}/>
                <SC.InputContainer>
                    <Input label={'Name'}/>
                    <Input label={'Email'}/>
                    <Textarea label={'Message'}/>
                    <Button clickButton={() => {
                    }} title={'Submit'}/>
                </SC.InputContainer>
                <SC.ExitButton onClick={clickCloseWindow}>
                    <SC.ExitIcon src={exit} alt="exit"/>
                </SC.ExitButton>
            </SC.FormContainer>
        </SC.Section>
    );
};
