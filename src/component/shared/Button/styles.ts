import styled from "@emotion/styled";
import { ButtonProps } from "./interfaces";
import { SpacingProps } from "../../../interfaces";
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
export let StyledButton = styled.button<ButtonProps & SpacingProps>`
  background: ${({ theme }) => theme.color.primary};
  border: 1px solid ${({ theme }) => theme.color.secondary};
  border-radius: 8px;
  color: wheat;
  ${(props) => (props?.height ? `height: ${props.height};` : "")}
  ${(props) => getSpacing(props)}
`;
