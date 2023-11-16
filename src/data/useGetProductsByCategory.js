import { useGetProducts } from "../context/productContext";

const useGetProductsByCategory = (category) => {
  const products = useGetProducts();
  if (!category) throw new Error("missing Category in useGetProduct call");

  const product = products.item.findAll(
    (product) => product.category === category
  );
  return { item: product };
};

export default useGetProductsByCategory;
