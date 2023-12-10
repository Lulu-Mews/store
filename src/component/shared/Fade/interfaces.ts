export interface FadeComProps {
  borderRadius?: string;
  backgroundColor?: string;
  height?: string;
  width?: string;
}

export type FadeComponentProps = FadeComProps & { children?: React.ReactNode };
