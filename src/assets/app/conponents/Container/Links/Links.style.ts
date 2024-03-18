import styled from "styled-components";
import { theme } from "../../../styles/Theme";

export const InputStyle = styled.div`
  display: flex;
  gap: 16px;
  input {
    padding: 12px;
    align-items: center;
    flex: 1;
    border: 1px solid #000;
    background: #fff;
    width: 100%;
  }
  button {
    color: black;
    font-family: Epilogue, sans-serif;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%;
    border: 1px solid #000;
    display: flex;
    padding: 12px 24px;
    justify-content: center;
    align-items: center;
    gap: 8px;
  }
  // @media {theme.media.tablet} {
  //   flex-direction: column;
  //   width: 100%;
  // }
`;
export const LinksWrapperStyle = styled.section`
  display: flex;
  justify-content: space-between;
  width: 90%;
  align-items: center;
  margin: 80px auto;
   color: ${theme.colors.secondary};
  // @media {theme.media.tablet} {
  //   flex-direction: column;
  //   align-items: start;
  //   gap: 26px;
  //   button {
  //     width: 50%;
  //   }
  // }
`;
export const ContactMe = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 12px;
  a {
    width: 20px;
  }
  // @media theme.media.tablet} {
  //   width: 100%;
  // }
`;
export const LinksStyle = styled.div`
  ul {
    display: flex;
    gap: 58px;
    li {
      cursor: pointer;
    }
  }
`;
