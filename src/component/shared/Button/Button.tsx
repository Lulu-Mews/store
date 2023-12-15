import { ButtonComponentProps } from "./interfaces";
import { StyledButton } from "./styles";

const Button: React.FC<ButtonComponentProps> = (props) => {
  return <StyledButton {...props} />;
};

export default Button;
