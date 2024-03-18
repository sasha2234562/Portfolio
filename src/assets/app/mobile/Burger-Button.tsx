'use client'
import styled from "styled-components";

export const BurgerButton = () => {
  return <BurgerMenu></BurgerMenu>;
};
const BurgerMenu = styled.span`
  // background: {theme.colors.burgerMenu};
  width: 24px;
  height: 2px;
  &::before {
    content: '';
    display: block;
    position: absolute;
    // background: {theme.colors.burgerMenu};
    stroke-width: 1.5;
    width: 24px;
    height: 2px;
    transform: translateY(-6px);
  }
  &::after {
    content: '';
    display: block;
    position: absolute;
    // background: {theme.colors.burgerMenu};
    width: 24px;
    height: 2px;
    transform: translateY(6px);
  }
`;
