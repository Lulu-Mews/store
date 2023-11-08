import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const CartProvider = ({ children, initialState }) => {
  const state = useState(initialState);
  return <CartContext.Provider value={state}>{children}</CartContext.Provider>;
};

export const useGetCarts = () => {
  const cart = useContext(CartContext);
  return cart;
};
