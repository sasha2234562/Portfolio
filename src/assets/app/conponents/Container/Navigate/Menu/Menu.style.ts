import {Link} from 'react-scroll';
import styled from "styled-components";

export const StyledMenu = styled.nav`
  ul {
    display: flex;
    align-items: center;
    gap: 32px;
  }

`;

export const Links = styled(Link)`
  font-family: Epilogue, sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
  color: transparent;
  cursor: pointer;
`;
export const Mask = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  height: 50%;
  display: inline-block;
  overflow-y: hidden;
  color: #2d2c2c;
  & + & {
    top: 50%;
    span {
      display: inline-block;
      transform: translateY(-50%);
    }
  }
`;
export const ListItem = styled.li`
  position: relative;
  &:hover {
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
