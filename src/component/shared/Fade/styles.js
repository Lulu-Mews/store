import styled from "@emotion/styled";

export let StyledFade = styled.div`
  content: "";
  position: absolute;
  z-index: -1;
  ${(props) =>
    props?.backgroundColor ? `background: ${props.backgroundColor};` : ""}
  ${(props) => (props?.height ? `height: ${props.height};` : "")}
  ${(props) => (props?.width ? `width: ${props.width};` : "")}
  ${(props) =>
    props?.borderRadius ? `border-radius: ${props.borderRadius};` : ""}
`;
