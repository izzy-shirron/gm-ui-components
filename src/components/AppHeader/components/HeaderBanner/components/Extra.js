import styled from "styled-components";
import { mix } from "polished";

import { spacingScale } from "style/styleFunctions";
import { keen } from "style/styleVariables";

// Z-index positions these above the preceding Banner Title in order to ensure they're visible above the Banner Title's shadow
const Extra = styled.a`
  font-family: ${props => props.theme.FONT_STACK_BASE};
  color: #fff;
  background: ${props => mix(props.theme.OPACITY_15, "#fff", "#000")};
  border-radius: ${props => props.theme.RADIUS_05};
  font-size: ${props => props.theme.FONT_SIZE_SM};
  font-weight: ${props => props.theme.FONT_WEIGHT_SEMIBOLD};
  padding: ${spacingScale(0.25)} ${spacingScale(1)};
  margin: ${spacingScale(1)};
  bottom: ${spacingScale(0.5)};
  display: inline-block;
  position: relative;
  transition: all 0.15s ease;
  z-index: 2;
  text-decoration: none;

  &:not(:last-child) {
    margin-right: ${spacingScale(1)};
  }

  &:hover {
    background: ${props => mix(props.theme.OPACITY_50, "#fff", "#000")};
  }
`;

Extra.defaultProps = {
  theme: keen
};

export default Extra;
