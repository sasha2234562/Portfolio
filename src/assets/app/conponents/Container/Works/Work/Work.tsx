import { FC } from 'react';
import * as SC from "./Work.style";
import { WorkType } from "./Work.type.ts";

const Work: FC<WorkType> = ({
  text,
  title,
  background,
    link
}) => {
  return (
    <SC.WorkWrapper href={link} target={"_blank"}>
        <SC.Card>
            <SC.Front>
                <SC.BackgroundImage src={background} alt={''}/>
                <SC.TitleStyle>{title}</SC.TitleStyle>
            </SC.Front>
            <SC.Back><SC.WorkTextStyle>{text}</SC.WorkTextStyle></SC.Back>
        </SC.Card>
    </SC.WorkWrapper>
  );
};
export default Work;