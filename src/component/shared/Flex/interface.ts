import { SpacingProps } from "../../../interfaces";

export interface FlexProps {
  align?: string;
  justify?: string;
  isVertical?: boolean;
  isWrapping?: boolean;
  width?: string;
  height?: string;
  order?: string;
  flex?: string;
  onClick?: () => void;
}

export type FlexComponentProps = FlexProps &
  SpacingProps & { children?: React.ReactNode };
