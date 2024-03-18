import  { FC } from 'react';
import * as SC from "./Work.style";
import {WorkType} from "./Work.type.ts";

export const Work: FC<WorkType> = ({
  text,
  title,
  recommendation,
  background,
}) => {
  return (
    <SC.WorkWrapper
      style={{
        backgroundImage: `url(${background})`,
      }}
    >
      <SC.TextWrapperStyle>
        <SC.BoxStyle>
          <SC.TitleStyle>{title}</SC.TitleStyle>
          <SC.PracticalStyle>A Case Study_</SC.PracticalStyle>
          <SC.RecommendationStyle>{recommendation}</SC.RecommendationStyle>
        </SC.BoxStyle>
        <SC.WorkTextStyle>{text}</SC.WorkTextStyle>
      </SC.TextWrapperStyle>
    </SC.WorkWrapper>
  );
};
