import * as SC from './section-title.style.ts'
import {FC} from "react";

interface SectionTitleInterface {
    title: string
    id: string
}

export const SectionTitle: FC<SectionTitleInterface> = ({title, id}) => {
    return (
        <SC.Title id={id}>{title}</SC.Title>
    );
};
