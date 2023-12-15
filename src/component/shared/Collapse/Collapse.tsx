import { CollapseComponentProps } from "./interfaces";

const Collapse: React.FC<CollapseComponentProps> = ({ isClosed, children }) => {
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

export default Collapse;
