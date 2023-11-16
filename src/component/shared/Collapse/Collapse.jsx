import React from "react";

export const Collapse = ({ isClosed, children }) => {
  return (
    <div
      style={{
        height: isClosed ? "0%" : "100%",
        overflow: "hidden",
      }}
    >
      {children}
    </div>
  );
};
