export interface CollapseProps {
  isClosed: boolean;
}

export type CollapseComponentProps = CollapseProps & {
  children?: React.ReactNode;
};
