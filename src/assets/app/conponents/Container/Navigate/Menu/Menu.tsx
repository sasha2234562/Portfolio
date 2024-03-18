'use client'
import {Links, ListItem, Mask, StyledMenu} from "./Menu.style";

const menu = ['Projects', 'About', 'Digital Assets'];
const Menu = () => {
  return (
    <StyledMenu>
      <ul>
        {menu.map((item, index) => {
          return (
            <ListItem key={index}>
              <Links to={item} smooth duration={1000}>
                {item}
                <Mask>
                  <span>{item}</span>
                </Mask>
                <Mask>
                  <span>{item}</span>
                </Mask>
              </Links>
            </ListItem>
          );
        })}
      </ul>
    </StyledMenu>
  );
};
export default Menu