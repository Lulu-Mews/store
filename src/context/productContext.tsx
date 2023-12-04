import { PropsWithChildren, createContext, useContext, useState } from "react";
import { Product } from "../interfaces";
type ProductStateProps = Product[] | undefined;
const ProductContext = createContext<ProductStateProps>(undefined);

export const ProductProvider: React.FC<
  PropsWithChildren<{ initialState: Product[] }>
> = ({ children, initialState }) => {
  const [state] = useState(initialState);
  return (
    <ProductContext.Provider value={state}>{children}</ProductContext.Provider>
  );
};

export const useGetProducts = (): ProductStateProps => {
  const products = useContext(ProductContext);
  return products;
};
