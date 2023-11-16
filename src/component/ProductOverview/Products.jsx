import React from "react";
import Product from "./Product";
import { useGetProducts } from "../../context/productContext";
import Flex from "../shared/Flex/Flex";
import { useParams, useSearchParams } from "react-router-dom";

function Products() {
  const [urlParam] = useSearchParams();
  const query = urlParam.get("query");
  const { category } = useParams();
  const products = useGetProducts();
  const search = decodeURI(query);
  const isMobile = window.visualViewport.width < 500;

  const filterSearchFunction = (product) => {
    const searchTerms = search.split(" ");
    if (!searchTerms || !query) return true;
    return searchTerms.some(
      (term) =>
        product?.name.includes(term) ||
        (product?.description && product?.description.includes(term))
    );
  };

  const productElements = products.item
    .filter(filterSearchFunction)
    .filter((product) => (category ? product.category === category : true))
    .map((item) => <Product key={item.id} {...item} />);
  return (
    <>
      <div className="products__fade" />
      <Flex spacing={{ top: "24px" }} wrap width={isMobile ? "100%" : "70%"}>
        {productElements}
      </Flex>
    </>
  );
}

export default Products;
