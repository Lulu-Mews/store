import Flex from "../component/shared/Flex/Flex";
import StlLoader from "../component/Render/StlLoader";
import Header from "../component/shared/Header/Header";

const StlViewer = () => {
  return (
    <>
      <Header />
      <Flex align="start" justify="center" spacing={{ top: "10px" }}>
        <StlLoader />
      </Flex>
    </>
  );
};

export default StlViewer;
