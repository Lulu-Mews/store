import { createContext, useContext, useEffect, useState } from "react";
import { Product } from "../interfaces";
type ProductStateProps = Product[] | undefined;
const ProductContext = createContext<ProductStateProps>(undefined);

export const ProductProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [state, setState] = useState([]);

  const fetchProducts = async () => {
    const response = await fetch("http://localhost:5000/products");
    const products = await response.json();
    setState(products.data)
  }
  useEffect(() => {
    fetchProducts()
  }, [])

  return (
    <ProductContext.Provider value={state}>{children}</ProductContext.Provider>
  );
};

export const useGetProducts = (): ProductStateProps => {
  const products = useContext(ProductContext);
  return products;
};
