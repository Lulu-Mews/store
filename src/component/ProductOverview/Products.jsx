import React from "react";
import Product from "./Product";
import { useGetProducts } from "../../context/productContext";
import Flex from "../shared/Flex/Flex";

function Products() {
  const products = useGetProducts();
  const productElements = products.item.map((item) => (
    <Product key={item.id} {...item} />
  ));
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
