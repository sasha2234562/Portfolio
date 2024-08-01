import * as SC from './section-title.style.ts'
import {FC} from "react";

interface SectionTitleInterface {
    title: string
}

export const SectionTitle: FC<SectionTitleInterface> = ({title}) => {
    return (
        <SC.Title>{title}</SC.Title>
    );
};
