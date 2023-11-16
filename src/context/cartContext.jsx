import { createContext, useContext, useEffect, useState } from "react";

const CartContext = createContext();

export const CartProvider = ({ children, initialState }) => {
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

export const useGetCarts = () => {
  const cart = useContext(CartContext);
  return cart;
};
