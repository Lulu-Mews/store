import {
  Dispatch,
  PropsWithChildren,
  SetStateAction,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
interface CartContextProps {
  id?: string;
  name?: string;
  description?: string;
  details?: string;
  price?: number;
  vat?: number;
  images?: string[];
  category?: string;
}
type CartStateProps = [
  CartContextProps[] | undefined,
  Dispatch<SetStateAction<CartContextProps[]>> | undefined
];
const CartContext = createContext<CartStateProps>([undefined, undefined]);

export const CartProvider: React.FC<
  PropsWithChildren<{ initialState: CartContextProps[] }>
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
