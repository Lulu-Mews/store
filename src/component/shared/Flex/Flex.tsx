import { FlexComponentProps } from "./interface";
import { StyledFlex } from "./styles";

const Flex: React.FC<FlexComponentProps> = (props) => {
  return <StyledFlex {...props} />;
};

export default Flex;
