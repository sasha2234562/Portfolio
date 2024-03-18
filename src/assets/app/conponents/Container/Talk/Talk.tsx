'use client';
import { BurgerButton } from "../../../mobile/Burger-Button";
import styled from "styled-components";
import {theme} from "../../../styles/Theme.ts";


const Talk = () => {
  return (
    <ButtonWrapper>
      <ButtonStyle>
        <span>Let’s Talk</span>
        <Mask>
          <span>Let’s Talk</span>
        </Mask>
        <Mask>
          <span>Let’s Talk</span>
        </Mask>
      </ButtonStyle>
      <BurgerWrapper>
        <BurgerButton />
      </BurgerWrapper>
    </ButtonWrapper>
  );
};
export default Talk;
const ButtonWrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;
`;
const BurgerWrapper = styled.div`
  display: none;
   @media ${theme.media.tablet} {
     display: grid;
   }
`;
const Mask = styled.span`
    position: absolute;
    left: 0;
    right: 0;
    display: inline-block;
    color: ${theme.colors.rectangle};
    overflow-y: hidden;

    & + & {
        //top: 50%;

        span {
            display: inline-block;
            //transform: translateY(-50%);
        }
    }
`;
const ButtonStyle = styled.button`
  position: relative;
  font-family: Epilogue, sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
  padding: 8px 20px;
  justify-content: center;
  align-items: center;
  background: #2d2c2c;
  gap: 8px;
  color: transparent;
  &:hover {
    cursor: pointer;
    ${Mask} {
      transform: skewX(12deg) translateX(2px);
      transition: 0.5s;
      & + ${Mask} {
        transition: 0.5s;
        transform: skewX(12deg) translateX(-2px);
      }
    }
  }
`;
