import styled from "@emotion/styled";

const getSpacing = ({ spacing }) => {
  if (!spacing) return "";
  const { top, bottom, right, left } = spacing;
  let spacingString = "";

  if (top) spacingString += `margin-top: ${top};`;
  if (bottom) spacingString += `margin-bottom: ${bottom};`;
  if (right) spacingString += `margin-right: ${right};`;
  if (left) spacingString += `margin-left: ${left};`;
  return spacingString;
};

export let StyledFlex = styled.div`
  display: flex;
  ${(props) => (props?.align ? `align-items: ${props?.align};` : "")}
  ${(props) => (props?.justify ? `justify-content: ${props?.justify};` : "")}
  ${(props) => (props?.isVertical ? `flex-direction: column;` : "")}
  ${(props) => (props?.wrap ? `flex-wrap: wrap;` : "")}
  ${(props) => (props?.width ? `width: ${props.width};` : "")}
  ${(props) => (props?.height ? `height: ${props.height};` : "")}
  ${(props) => getSpacing(props)}
`;
