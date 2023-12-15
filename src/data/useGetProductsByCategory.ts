import { useGetProducts } from "../context/productContext";
import { Product } from "../interfaces";

const useGetProductsByCategory = (category: string) => {
  const products = useGetProducts();
  if (!category) throw new Error("missing Category in useGetProduct call");

  const product = products?.reduce((acc, product) => {
    if (product.category === category) acc.push(product);
    return acc;
  }, [] as Product[]);
  return { item: product };
};

export default useGetProductsByCategory;
