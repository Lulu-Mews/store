import React, { useState } from "react";
import { StyledFileDropper } from "./styles";

export function FileDropper({ children, onUpload }) {
  const [isHovering, setIsHovering] = useState(false);
  const dropHandler = async (event) => {
    event.preventDefault();

    const firstFile = event.dataTransfer.files[0];
    const fileBuffer = await firstFile.arrayBuffer();
    onUpload?.(fileBuffer);
  };
  const dragOverHandler = (event) => {
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
}
