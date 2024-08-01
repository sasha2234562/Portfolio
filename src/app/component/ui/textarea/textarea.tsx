import * as SC from './textarea.style.ts'
import {FC} from "react";
interface TextareaInterface {
    label: string
}

export const Textarea:FC<TextareaInterface> = ({label}) => {
    return (
        <SC.TextareaWrapper>
            <label>{label}</label>
            <SC.Textarea />
        </SC.TextareaWrapper>
    );
};
