import React from "react";
import Detail from "./Detail";
import useGetProduct from "../../data/useGetProduct";

function ProductDetails({ id }) {
  const { item } = useGetProduct(id);
  if (!id) return null;
  return <Detail {...item} />;
}

export default ProductDetails;
