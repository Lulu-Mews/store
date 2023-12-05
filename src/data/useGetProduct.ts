import { useGetProducts } from "../context/productContext";
const useGetProduct = (id?: string) => {
  const products = useGetProducts();
  if (!id) throw new Error("missing ID in useGetProduct call");

  const product = products?.find((product) => product.id === id);
  return { item: product };
};

export default useGetProduct;
