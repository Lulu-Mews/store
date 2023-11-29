export interface SpacingProps {
  spacing?: {
    top?: string;
    right?: string;
    bottom?: string;
    left?: string;
  };
}
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
