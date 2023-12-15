import { StyledImage } from "./styles";
import { ImageComponentProps } from "./interfaces";
const Image: React.FC<ImageComponentProps> = (props) => {
  if (!props.src) return null;
  return <StyledImage {...props} />;
};

export default Image;
