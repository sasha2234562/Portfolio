import styled from "styled-components";
import {font} from "../../../styles/Common";
import {theme} from "../../../styles/Theme.ts";


export const WorksWrapper = styled.section`
    display: inline-flex;
    flex-direction: column;
    gap: 2.875rem;
    margin: 7.5rem 14%;
    width: 72%;
    justify-content: center;
    @media ${theme.media.mobile} {
        margin: 7.5rem 0;
        width: 100%;
        gap: 3rem;
    }
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

