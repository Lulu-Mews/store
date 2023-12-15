import { StyledFade } from "./styles";
import { FadeComponentProps } from "./interfaces";
const Fade: React.FC<FadeComponentProps> = (props) => {
  return <StyledFade {...props} />;
};

export default Fade;
