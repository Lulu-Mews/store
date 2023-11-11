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
export let StyledButton = styled.button`
  background: #3238fe;
  border: 1px solid #1701c0;
  border-radius: 8px;
  padding: 5px 10px 5px 10px;
  color: wheat;
  ${(props) => getSpacing(props)}
`;
