import * as SC from './contact-with-me.style.ts'
import {Button, SectionTitle} from "../../../ui";
import exit from '../../../../../assets/icons/exit.svg'
import {Dispatch, ElementRef, FC, SetStateAction, useRef} from "react";
import {useForm} from "react-hook-form";
import emailjs from '@emailjs/browser';

interface Interface {
    openForm: boolean
    setOpenForm: Dispatch<SetStateAction<boolean>>
}

export const ContactWithMe: FC<Interface> = ({openForm, setOpenForm}) => {
    const ref = useRef<ElementRef<'form'>>(null);
const {watch, register} = useForm()
    const clickCloseWindow = () => {
        setOpenForm(false)
        document.body.style.overflow = 'auto'
    }

    const sendEmail = (e: any) => {
        e.preventDefault();
        if (ref.current) {
            emailjs
                .sendForm('service_jvkr5yo', 'template_s40yluf', ref.current, {
                    publicKey: 'rbGFStihG4as6VKkD',
                })
                .then(
                    () => {
                        console.log('SUCCESS!');
                    },
                    (error) => {
                        console.log('FAILED...', error.text);
                    },
                );
        }
    };

    console.log(watch())
    return (
        <SC.Section openForm={openForm}>
            <SC.FormContainer openForm={openForm}>
                <SectionTitle id={'contacts'} title={'Написать мне'}/>
                <SC.InputsContainer ref={ref} onSubmit={sendEmail}>
                    <SC.InputContainer>
                        <SC.Label>Name</SC.Label>
                        <SC.Input {...register('name')} type={"text"} name={'name'}/>
                    </SC.InputContainer>
                    <SC.InputContainer>
                        <SC.Label>Email</SC.Label>
                        <SC.Input {...register('email')} type={"email"} name={'email'}/>
                    </SC.InputContainer>
                    <SC.TextareaWrapper>
                        <SC.Label>Message</SC.Label>
                        <SC.Textarea {...register('message')} name={'message'}/>
                    </SC.TextareaWrapper>
                    <Button title={'Submit'} type={"submit"}/>
                </SC.InputsContainer>
                <SC.ExitButton onClick={clickCloseWindow}>
                    <img src={exit} alt="exit"/>
                </SC.ExitButton>
            </SC.FormContainer>
        </SC.Section>
    );
};
