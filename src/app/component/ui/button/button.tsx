import * as SC from './button.style.ts'
import {CSSProperties, FC} from "react";

interface ButtonInterface{
    title: string
    style?: CSSProperties
    clickButton?: ()=> void
    type?: "button" | "submit" | "reset"
}

export const Button: FC<ButtonInterface> = ({title, type, style, clickButton}) => {
    return (
        <SC.Button type={type ||'button'} style={style} onClick={clickButton}>{title}</SC.Button>
    );
};
