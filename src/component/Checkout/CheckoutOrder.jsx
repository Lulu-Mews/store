import React from "react";
import Button from "../shared/Button/Button";
import { useGetCarts } from "../../context/cartContext";

function CheckoutOrder({ user, delivery, setHasPressedOrder }) {
  const [cart] = useGetCarts();
  console.log(cart);
  return <Button onClick={() => setHasPressedOrder(true)}>Order</Button>;
}

export default CheckoutOrder;
