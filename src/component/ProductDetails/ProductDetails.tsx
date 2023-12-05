import React from "react";
import Detail from "./Detail";
import useGetProduct from "../../data/useGetProduct";
import { Product } from "../../interfaces";

const ProductDetails: React.FC<Partial<Product>> = ({ id }) => {
  const { item } = useGetProduct(id);
  if (!id) return null;
  return <Detail {...item} />;
};

export default ProductDetails;
