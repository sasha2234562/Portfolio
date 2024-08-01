import * as SC from './button.style.ts'
import {CSSProperties, FC} from "react";

interface ButtonInterface{
    title: string
    style?: CSSProperties
}

export const Button: FC<ButtonInterface> = ({title, style}) => {
    return (
        <SC.Button style={style} >{title}</SC.Button>
    );
};
