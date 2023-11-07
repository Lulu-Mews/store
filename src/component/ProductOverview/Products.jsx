import React from "react";
import "./Products.css";
import getProducts from "../../data/products.js";
import Product from "./Product";

async function Products() {
  const productElements = (await getProducts()).item.map((item) => (
    <Product {...item} />
  ));
  return (
    <>
      <div className="products__wrapper">
        <div className="products__fade" />
        <div className="products__content">{productElements}</div>
      </div>
    </>
  );
}

export default Products;
