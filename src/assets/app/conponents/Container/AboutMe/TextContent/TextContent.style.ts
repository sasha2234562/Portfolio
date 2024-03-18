import styled from "styled-components";
import {font} from "../../../../styles/Common.ts";

export const TitleStyle = styled.p`
  font-size: 48px;
  font-style: normal;
  font-weight: 254;
  line-height: 120%;
  align-self: stretch;
   ${font({
    weight: 254,
    Fmax: 48,
    Fmin: 43,
    color: '#f2f2f2',
    family: 'Epilogue, sans',
})}
`;

export const AboutStyle = styled.span`
  color: #f2f2f2;
  font-family: Epilogue, sans-serif;
  font-size: 1rem;
  font-style: normal;
  font-weight: 900;
  line-height: 150%;
  align-self: stretch;
`;
export const TextInfo = styled.div`
  padding: 0 5px;
  width: 80%;
`;
