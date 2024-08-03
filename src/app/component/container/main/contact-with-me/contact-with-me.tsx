import * as SC from './contact-with-me.style.ts'
import {Button, Section} from "../../../ui";
import {SectionTitle} from "../../../ui";
import {Input} from "../../../ui/input/input.tsx";
import {Textarea} from "../../../ui/textarea/textarea.tsx";

export const ContactWithMe = () => {
    return (
        <Section>
            <SectionTitle title={'Контакты'}/>
            <SC.InputContainer>
                <Input label={'Name'}/>
                <Input label={'Email'}/>
                <Textarea label={'Message'}/>
                <Button title={'Submit'}/>
            </SC.InputContainer>
        </Section>
    );
};
