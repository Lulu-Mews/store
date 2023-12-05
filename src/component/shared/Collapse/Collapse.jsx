export const Collapse = ({ isClosed, children }) => {
  return (
    <div
      style={{
        display: isClosed ? "none" : "block",
      }}
    >
      {children}
    </div>
  );
};
