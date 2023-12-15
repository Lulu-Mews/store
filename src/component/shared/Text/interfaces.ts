import { SpacingProps } from "../../../interfaces";

export interface TextProps {
  fontSize?: string;
  color?: string;
}

export type TextComponentProps = TextProps &
  SpacingProps & { children?: React.ReactNode };
