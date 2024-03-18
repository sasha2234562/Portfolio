'use client'
import styled from "styled-components";

type FlexWrapperProps = {
  direction?: string;
  justify?: string;
  align?: string;
  wrap?: string;
  padding?: string;
};
export const FlexWrapper = styled.div<FlexWrapperProps>`
  display: flex;
  flex-direction: ${(props) => props.direction || 'row'};
  justify-content: ${(props) => props.justify || 'flex-start'};
  align-items: ${(props) => props.align || 'stretch'};
  wrap-option: ${(props) => props.wrap || 'nowrap'};
  height: 100%;
  padding: ${(props) => props.padding || ''};
`;
