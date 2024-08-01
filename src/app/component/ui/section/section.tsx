import * as SC from './section.style.ts'
import {FC, ReactNode} from "react";

interface SectionInterface {
    children: ReactNode
}

export const Section:FC<SectionInterface> = ({children}) => {

    return <SC.Container>{children}</SC.Container>;
};
