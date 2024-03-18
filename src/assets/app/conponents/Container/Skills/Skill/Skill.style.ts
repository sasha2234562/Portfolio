import styled from "styled-components";
import {font} from "../../../../styles/Common";

export const SkillWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 8px;
`;

export const NumberSkill = styled.span`
  font-style: normal;
  line-height: normal;
   ${font({
     weight: 100,
     Fmax: 70,
     Fmin: 45,
     color: '#fff',
     family: 'Epilogue, serif',
 })}
`;
export const TitleStyle = styled.span`
  font-style: normal;
  line-height: normal;
   ${font({
     weight: 300,
     Fmax: 30,
     Fmin: 25,
     color: '#fff',
     family: 'Epilogue, sans-serif',
 })}
`;
export const AboutSkillStyle = styled.p`
  max-width: 326px;
  font-style: normal;
  word-wrap: break-word;
    display: -webkit-box; 
    -webkit-line-clamp: 5; 
    -webkit-box-orient: vertical; 
    overflow: hidden;
    ${font({
     weight: 200,
     Fmax: 18,
     Fmin: 14,
     color: '#fff',
     family: 'Epilogue, sans-serif',
 })}
`;
