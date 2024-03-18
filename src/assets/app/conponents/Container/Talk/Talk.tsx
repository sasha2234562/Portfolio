'use client';
import { BurgerButton } from "../../../mobile/Burger-Button";
import * as SC from './Talk.style.ts'

const Talk = () => {
  return (
    <SC.ButtonWrapper>
      <SC.ButtonStyle>
        <span>Let’s Talk</span>
        <SC.Mask>
          <span>Let’s Talk</span>
        </SC.Mask>
        <SC.Mask>
          <span>Let’s Talk</span>
        </SC.Mask>
      </SC.ButtonStyle>
      <SC.BurgerWrapper>
        <BurgerButton />
      </SC.BurgerWrapper>
    </SC.ButtonWrapper>
  );
};
export default Talk;
