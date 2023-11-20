import React from "react";
import Button from "../shared/Button/Button";
import { useGetCarts } from "../../context/cartContext";

function CheckoutOrder({ user, delivery }) {
  const [cart] = useGetCarts();
  return (
    <Button onClick={() => console.log(user, cart, delivery)}>Order</Button>
  );
}

export default CheckoutOrder;
