import { StyledBorder } from "./styles";
import { BorderComponentProps } from "./Interfaces";

const Border: React.FC<BorderComponentProps> = (props) => {
  return <StyledBorder {...props} />;
};

export default Border;
