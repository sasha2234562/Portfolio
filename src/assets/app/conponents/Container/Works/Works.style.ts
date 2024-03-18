import styled from "styled-components";
import {font} from "../../../styles/Common";


export const WorksWrapper = styled.section`
  display: inline-flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 78px;
  margin: 120px 14%;
  align-content: space-around;

`;
export const WorksTitle = styled.h2`
  font-style: normal;
   ${font({
     weight: 800,
     Fmax: 120,
     Fmin: 60,
     color: '#2d2c2c',
     family: 'Epilogue, sans-serif',
 })}
`;

