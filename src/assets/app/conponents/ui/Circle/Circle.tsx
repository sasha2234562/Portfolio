import styled from "styled-components";


export const Circle = () => {
  return (
    <CircleStyle>
      <span>
        <b>F</b>
        <b>r</b>
        <b>o</b>
        <b>n</b>
        <b>t</b>
        <b>e</b>
        <b>n</b>
        <b>d</b>
      </span>
      <b> </b>
      <span>
        <b>D</b>
        <b>e</b>
        <b>v</b>
        <b>e</b>
        <b>l</b>
        <b>o</b>
        <b>p</b>
        <b>e</b>
        <b>r</b>
      </span>
    </CircleStyle>
  );
};

const CircleStyle = styled.div`
  font: 5vmin monospace;
  margin: auto;
  display: flex;
  font-family: Epilogue, sans-serif;
  font-size: 52px;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
`;
