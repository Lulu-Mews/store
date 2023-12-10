import styled from "@emotion/styled";
import { SpacingProps } from "../../../interfaces";
import { TextProps } from "./interfaces";
const getSpacing = ({ spacing }: SpacingProps) => {
  if (!spacing) return "";
  const { top, bottom, right, left } = spacing;
  let spacingString = "";

  if (top) spacingString += `margin-top: ${top};`;
  if (bottom) spacingString += `margin-bottom: ${bottom};`;
  if (right) spacingString += `margin-right: ${right};`;
  if (left) spacingString += `margin-left: ${left};`;
  return spacingString;
};

export let StyledText = styled.div<TextProps & SpacingProps>`
  ${(props) => (props?.fontSize ? `font-size: ${props?.fontSize};` : "")}
  ${(props) => (props?.color ? `color: ${props?.color};` : "")}
  ${(props) => getSpacing(props)}
`;
