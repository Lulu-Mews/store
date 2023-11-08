import React from "react";
import "./Products.css";
import Product from "./Product";
import { useGetProducts } from "../../context/productContext";

function Products() {
  const products = useGetProducts();
  const productElements = products.item.map((item) => (
    <Product key={item.id} {...item} />
  ));
  return (
    <div className="products__wrapper">
      <div className="products__fade" />
      <div className="products__content">{productElements}</div>
    </div>
  );
}

export default Products;
