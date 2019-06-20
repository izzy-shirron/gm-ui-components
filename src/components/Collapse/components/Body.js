import styled, { css } from "styled-components";

export const Body = styled.div`
  overflow: hidden;
  width: 100%;
  transition: all 0.5s ease;

  ${({ collapsed }) =>
    collapsed &&
    css`
      height: 0px;
      visibility: hidden;
    `};
  height: ${({ bodyHeight }) => bodyHeight}px;
`;