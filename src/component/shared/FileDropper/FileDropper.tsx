import React, { DragEvent, PropsWithChildren, useState } from "react";
import { StyledFileDropper } from "./styles";
import { SpacingProps } from "../../../interfaces";

export const FileDropper: React.FC<
  PropsWithChildren<
    SpacingProps & { onUpload?: (fileBuffer: ArrayBuffer) => void }
  >
> = ({ children, onUpload }) => {
  const [isHovering, setIsHovering] = useState(false);
  const dropHandler = async (event: DragEvent<HTMLDivElement>) => {
    event.preventDefault();

    const firstFile = event.dataTransfer.files[0];
    const fileBuffer = await firstFile.arrayBuffer();
    onUpload?.(fileBuffer);
  };
  const dragOverHandler = (event: DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    setIsHovering(true);
  };
  const cancelHovering = () => {
    setIsHovering(false);
  };
  return (
    <StyledFileDropper
      onDrop={dropHandler}
      onDragEnter={dragOverHandler}
      onMouseUp={cancelHovering}
      onDragLeave={cancelHovering}
      hovering={isHovering}
    >
      {children}
    </StyledFileDropper>
  );
};
