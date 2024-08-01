import {FC} from 'react';
import * as SC from './input.style.ts'

interface InputInterface {
    label: string
    type?: string
}

export const Input:FC<InputInterface> = ({label, type}) => {
    return (
        <SC.InputContainer>
            <SC.Label>{label}</SC.Label>
            <SC.Input type={type || "text"}/>
        </SC.InputContainer>
    );
};
