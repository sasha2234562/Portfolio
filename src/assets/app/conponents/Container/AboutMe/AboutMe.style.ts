import styled from "styled-components";
import {theme} from "../../../styles/Theme.ts";

export const AboutMeHeader = styled.section`
  display: flex;
  gap: 4.9375rem;
  justify-content: center;
  text-align: left;
  padding: 109px 64px 200px 65px;
    @media ${theme.media.about} {
        flex-direction: column;
    }
`;
export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 120px;
    width: 55%;
    @media ${theme.media.about} {
        width: 100%;
    }
`;