import React from "react";
import Product from "./Product";
import { useGetProducts } from "../../context/productContext";
import Flex from "../shared/Flex/Flex";
import { useSearchParams } from "react-router-dom";

function Products() {
  const [urlParam] = useSearchParams();
  const query = urlParam.get("query");
  const products = useGetProducts();
  const search = decodeURI(query);

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
    .map((item) => <Product key={item.id} {...item} />);
  return (
    <Flex justify="center" className="products__wrapper">
      <div className="products__fade" />
      <Flex wrap width="75%" className="products__content">
        {productElements}
      </Flex>
    </Flex>
  );
}

export default Products;
