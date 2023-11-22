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

export let StyledBorder = styled.div`
  ${(props) => (props?.border ? `border: ${props.border};` : "")}
  ${(props) => (props?.borderTop ? `border-top: ${props.borderTop};` : "")}
${(props) => (props?.borderRight ? `border-right: ${props.borderRight};` : "")}
${(props) =>
    props?.borderBottom ? `border-bottom: ${props.borderBottom};` : ""}
${(props) => (props?.borderLeft ? `border-left: ${props.borderLeft};` : "")}
  ${(props) =>
    props?.borderRadius ? `border-radius: ${props.borderRadius};` : ""}
  ${(props) => getSpacing(props)}
`;
