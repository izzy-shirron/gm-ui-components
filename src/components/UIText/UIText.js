import React from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";
import { keen } from "style/styleVariables";

const Wrap = styled.span.attrs({
  as: props => props.isRunningText && "p"
})`
  display: block;
  opacity: 0.7;
  line-height: 1.1;

  ${props =>
    props.color === "contrast" &&
    css`
      opacity: ${props => props.theme.OPACITY_100};
    `}

  ${props =>
    props.color === "subtle" &&
    css`
      opacity: ${props => props.theme.OPACITY_50};
    `}

  ${props =>
    props.color === "nonessential" &&
    css`
      opacity: 0.3;
    `}

  ${props =>
    props.hideOverflow &&
    css`
      display: block;
      max-width: 100%;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    `}

  ${props =>
    props.level === "default" &&
    css`
      font-size: ${props => props.theme.FONT_SIZE_BASE};
    `}

  ${props =>
    props.level === "small" &&
    css`
      font-size: ${props => props.theme.FONT_SIZE_SM};
    `}

  ${props =>
    props.level === "micro" &&
    css`
      font-size: ${props => props.theme.FONT_SIZE_XS};
    `}

  ${props =>
    props.level === "large" &&
    css`
      font-size: ${props => props.theme.FONT_SIZE_MD};
    `}

  ${props =>
    props.lettercase === "caps" &&
    css`
      text-transform: uppercase;
      letter-spacing: 0.06em;
    `}

  ${props =>
    props.runningText &&
    css`
      display: block;
      max-width: 100%;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    `}
`;

UIText.propTypes = {
  children: PropTypes.any,
  color: PropTypes.oneOf(["contrast", "default", "subtle", "nonessential"]),
  hideOverflow: PropTypes.bool,
  lettercase: PropTypes.oneOf(["default", "caps"]),
  level: PropTypes.oneOf(["default", "small", "micro", "large"]),
  isRunningText: PropTypes.bool
};

UIText.defaultProps = {
  theme: keen,
  level: "default",
  color: "default",
  lettercase: "default",
  isRunningText: false,
  hideOverflow: false
};

/**
 * Description of your component
 */
export default function UIText({
  children,
  color,
  hideOverflow,
  level,
  isRunningText,
  lettercase
}) {
  return (
    <Wrap
      color={color}
      hideOverflow={hideOverflow}
      level={level}
      lettercase={lettercase}
      isRunningText={isRunningText}
    >
      {children}
    </Wrap>
  );
}

UIText.displayName = "UIText";
