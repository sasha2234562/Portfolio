import * as SC from './profession.style.ts'
import {FC} from "react";

interface Interface {
    text: string
}

export const Profession:FC<Interface> = ({text}) => {
    return  <SC.Profession>{text}</SC.Profession>
};
