import Menu from "./Menu/Menu";
import Talk from "../Talk/Talk";
import * as SC from "./Navigate.style";

export const Navigate = () => {
  return (
    <SC.NavigateWrapper>
      <Menu />
      <Talk />
    </SC.NavigateWrapper>
  );
};