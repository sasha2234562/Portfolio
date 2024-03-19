import * as SC from './Talk.style.ts'
import {FC} from "react";
import {MobileMenuProps} from "../../../mobile/MobileMenu/MobileMenu.tsx";
import BurgerOpen from "../../../mobile/BurgerButton/BurgerOpen.tsx";

const Talk:FC<MobileMenuProps>  = ({close}) => {
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
          <BurgerOpen close={close}/>
      </SC.BurgerWrapper>
    </SC.ButtonWrapper>
  );
};
export default Talk;
