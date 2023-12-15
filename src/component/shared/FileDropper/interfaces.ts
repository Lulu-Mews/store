import { SpacingProps } from "../../../interfaces";

export interface FileDropperProps
{ onUpload?: (fileBuffer: ArrayBuffer) => void }
export type FileDropperComponentProps = FileDropperProps & SpacingProps & {children?: React.ReactNode
};