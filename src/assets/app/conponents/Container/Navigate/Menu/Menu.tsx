'use client'
import * as SC from "./Menu.style";

const menu = ['Projects', 'About', 'Digital Assets'];
const Menu = () => {
  return (
    <SC.StyledMenu>
      <ul>
        {menu.map((item, index) => {
          return (
            <SC.ListItem key={index}>
              <SC.Links to={item} smooth duration={1000}>
                {item}
                <SC.Mask>
                  <span>{item}</span>
                </SC.Mask>
                <SC.Mask>
                  <span>{item}</span>
                </SC.Mask>
              </SC.Links>
            </SC.ListItem>
          );
        })}
      </ul>
    </SC.StyledMenu>
  );
};
export default Menu