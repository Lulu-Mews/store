import React from "react";
import "../ProductOverview/Products.css";
import getProducts from "../../data/products";
import Detail from "./Detail";

async function ProductDetails({ id }) {
  if (!id) return null;
  const { item } = await getProducts(id);
  return <Detail {...item} />;
}

export default ProductDetails;
