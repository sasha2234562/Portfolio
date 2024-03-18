import Menu from "./Menu/Menu";
import Talk from "../Talk/Talk";
import { NavigateWrapper } from "./Navigate.style";

export const Navigate = () => {
  return (
    <NavigateWrapper>
      <Menu />
      <Talk />
    </NavigateWrapper>
  );
};