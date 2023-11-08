import { createContext, useContext, useState } from "react";

const ProductContext = createContext();

export const ProductProvider = ({ children, initialState }) => {
  const [state] = useState(initialState);
  return (
    <ProductContext.Provider value={state}>{children}</ProductContext.Provider>
  );
};

export const useGetProducts = () => {
  const products = useContext(ProductContext);
  return products;
};
