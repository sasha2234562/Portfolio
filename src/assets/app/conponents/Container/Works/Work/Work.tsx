import  { FC } from 'react';
import {
  BoxStyle,
  PracticalStyle, RecommendationStyle,
  TextWrapperStyle,
  TitleStyle, WorkTextStyle,
  WorkWrapper
} from "./Work.style";

interface WorkType {
  text: string;
  recommendation: string;
  title: string;
  background: string;
}

export const Work: FC<WorkType> = ({
  text,
  title,
  recommendation,
  background,
}) => {
  return (
    <WorkWrapper
      style={{
        backgroundImage: `url(${background})`,
      }}
    >
      <TextWrapperStyle>
        <BoxStyle>
          <TitleStyle>{title}</TitleStyle>
          <PracticalStyle>A Case Study_</PracticalStyle>
          <RecommendationStyle>{recommendation}</RecommendationStyle>
        </BoxStyle>
        <WorkTextStyle>{text}</WorkTextStyle>
      </TextWrapperStyle>
    </WorkWrapper>
  );
};
