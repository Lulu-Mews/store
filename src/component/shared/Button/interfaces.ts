import { SpacingProps } from "../../../interfaces";

export interface ButtonProps {
  onClick?: () => void;
  height?: string;
  disabled?: boolean;
}

export type ButtonComponentProps = ButtonProps &
  SpacingProps & {
    children?: React.ReactNode;
  };
