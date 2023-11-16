import { createSearchParams, useNavigate } from "react-router-dom";
import { ProductFilters } from "../component/ProductOverview/ProductFilters";
import Products from "../component/ProductOverview/Products";
import Flex from "../component/shared/Flex/Flex";
import Header from "../component/shared/Header/Header";

const Home = () => {
  const isMobile = window.visualViewport.width < 500;
  const navigate = useNavigate();
  const selectSort = (e) => {
    const urlEncodedSearch = encodeURI(e.currentTarget.value);
    navigate({
      pathname: "/products",
      search: createSearchParams({
        sort: urlEncodedSearch,
      }).toString(),
    });
  };
  return (
    <>
      <Header />
      <Flex justify="center">
        <Flex width="75%" isVertical={isMobile} wrap>
          <ProductFilters />
          <Products />
          <Flex align="start">
            <select onChange={selectSort}>
              <option value="" disabled selected>
                Sort by:
              </option>
              <option value="priceDesc">priceDesc</option>
              <option value="priceAsc">priceAsc</option>
              <option value="nameDesc">nameDesc</option>
              <option value="nameAsc">nameAsc</option>
            </select>
          </Flex>
        </Flex>
      </Flex>
    </>
  );
};

export default Home;
