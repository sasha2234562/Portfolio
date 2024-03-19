import Menu from "./Menu/Menu";
import Talk from "../Talk/Talk";
import * as SC from "./Navigate.style";
import {FC} from "react";
import {MobileMenuProps} from "../../../mobile/MobileMenu/MobileMenu.tsx";

export const Navigate:FC<MobileMenuProps> = ({close}) => {
  return (
    <SC.NavigateWrapper>
      <Menu />
      <Talk close={close}/>
    </SC.NavigateWrapper>
  );
};