import { SpacingProps } from "../../../interfaces";

export interface ImageProps {
  src?: string;
  alt: string;
  width?: string;
  onClick?: () => void;
}

export type ImageComponentProps = ImageProps &
  SpacingProps & { children?: React.ReactNode };
