import {
  Dispatch,
  PropsWithChildren,
  SetStateAction,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import { Product } from "../interfaces";

type CartStateProps = [
  Product[] | undefined,
  Dispatch<SetStateAction<Product[]>> | undefined
];
const CartContext = createContext<CartStateProps>([undefined, undefined]);

export const CartProvider: React.FC<
  PropsWithChildren<{ initialState: Product[] }>
> = ({ children, initialState }) => {
  const [state, setState] = useState(initialState);

  useEffect(() => {
    const localStorageState = window.localStorage.getItem("cart");
    if (localStorageState) setState(JSON.parse(localStorageState));
  }, []);

  useEffect(() => {
    window.localStorage.setItem("cart", JSON.stringify(state));
  }, [state]);

  return (
    <CartContext.Provider value={[state, setState]}>
      {children}
    </CartContext.Provider>
  );
};

export const useGetCarts = (): CartStateProps => {
  const cart = useContext(CartContext);
  return cart;
};
