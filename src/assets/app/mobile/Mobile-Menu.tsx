'use client'
import { BurgerButton } from './Burger-Button';
import styled from "styled-components";
import SocialIcons from "../../../../../../progect/Portfolio/src/app/Container/SocialIcons/SocialIcons";

export const MobileMenu = () => {
  return (
    <MobileMenuContainer>
      <MobileMenuWrapper>
        <BurgerButtonWrapper>
          <BurgerButton />
        </BurgerButtonWrapper>
        <span>Projects</span>
        <hr />
        <p>About</p>
        <hr />
        <p>Digital Assets</p>
        <hr />
      </MobileMenuWrapper>
      <SocialIconsWrapper>
        <SocialIcons />
      </SocialIconsWrapper>
    </MobileMenuContainer>
  );
};
const BurgerButtonWrapper = styled.div`
  position: relative;
  display: inline;
  margin: 22px 39px 4px 216px;
`;
const MobileMenuContainer = styled.div`
  width: 300px;
  height: 300px;
  //background-color: {theme.colors.mobMenu};
`;
const MobileMenuWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 238px;
  margin: 45px 36px 0 26px;
  color: black;
  font-family: Epilogue, sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
  p {
    padding: 10px;
    display: inline;
    cursor: pointer;
  }
  hr {
    margin-bottom: 28px;
  }
`;
const SocialIconsWrapper = styled.div`
  display: flex;
  margin-left: 26px;
`;
