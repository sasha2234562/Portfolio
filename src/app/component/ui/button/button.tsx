import * as SC from './button.style.ts'
import {CSSProperties, FC} from "react";

interface ButtonInterface{
    title: string
    style?: CSSProperties
    clickButton: ()=> void
}

export const Button: FC<ButtonInterface> = ({title, style, clickButton}) => {
    return (
        <SC.Button style={style} onClick={clickButton}>{title}</SC.Button>
    );
};
