import { TextComponentProps } from "./interfaces";
import { StyledText } from "./styles";

const Text: React.FC<TextComponentProps> = (props) => {
  return <StyledText {...props} />;
};

export default Text;
