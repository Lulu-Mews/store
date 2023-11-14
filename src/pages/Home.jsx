import { ProductFilters } from "../component/ProductOverview/ProductFilters";
import Products from "../component/ProductOverview/Products";
import Flex from "../component/shared/Flex/Flex";
import Header from "../component/shared/Header/Header";

const Home = () => {
  const isMobile = window.visualViewport.width < 500;
  return (
    <>
      <Header />
      <Flex justify="center">
        <Flex width="75%" isVertical={isMobile} wrap>
          <ProductFilters />
          <Products />
        </Flex>
      </Flex>
    </>
  );
};

export default Home;
