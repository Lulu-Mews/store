import { useSearchParams } from "react-router-dom";
import { ProductFilters } from "../component/ProductOverview/ProductFilters";
import Products from "../component/ProductOverview/Products";
import Flex from "../component/shared/Flex/Flex";
import Header from "../component/shared/Header/Header";

const Home = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const sortValue = searchParams.get("sort");

  const isMobile = window.visualViewport.width < 500;

  const selectSort = (e) => {
    const urlEncodedSearch = encodeURI(e.currentTarget.value);
    searchParams.set("sort", urlEncodedSearch);
    setSearchParams(searchParams);
  };
  return (
    <>
      <Header />
      <Flex justify="center">
        <Flex
          width="75%"
          isVertical={isMobile}
          wrap
          align={isMobile ? "end" : undefined}
        >
          <Flex
            width={isMobile ? "100%" : "calc(20% - 24px)"}
            spacing={!isMobile ? { right: "24px" } : {}}
            isVertical
            order={isMobile ? 2 : undefined}
          >
            <ProductFilters />
          </Flex>
          <Flex
            spacing={{ top: "24px" }}
            wrap
            width={isMobile ? "100%" : "70%"}
            order={isMobile ? 3 : undefined}
          >
            <Products />
          </Flex>
          <Flex align="start" order={isMobile ? 1 : undefined}>
            <select onChange={selectSort} defaultValue={sortValue}>
              <option value="" disabled>
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
