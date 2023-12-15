import { SpacingProps } from "../../../interfaces";

export interface BorderProps {
  border?: string;
  borderTop?: string;
  borderRight?: string;
  borderBottom?: string;
  borderLeft?: string;
  borderRadius?: string;
}

export type BorderComponentProps = BorderProps &
  SpacingProps & { children?: React.ReactNode };
