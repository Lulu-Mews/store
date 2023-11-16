import { useEffect, useState } from "react";
import { useGetCarts } from "../../context/cartContext";
import Flex from "../shared/Flex/Flex";
import CartProduct from "./CartProduct";

const CartOverview = () => {
  const [state] = useGetCarts();
  const [cartProducts, setCartProducts] = useState();
  const [prices, setPrices] = useState({ prices: 0, vat: 0 });
  useEffect(() => {
    setPrices({ prices: 0, vat: 0 });
    const productElements = state

      .reduce((acc, curr) => {
        if (!acc.find((a) => a.id === curr.id)) acc.push(curr);
        return acc;
      }, [])
      .sort((a, b) => a.name > b.name)
      .map((product) => {
        const amount = state.reduce((acc, localProduct) => {
          return localProduct.name === product.name ? acc + 1 : acc;
        }, 0);
        setPrices((localprice) => {
          return {
            prices: localprice.prices + product.price * amount,
            vat: localprice.vat + product.vat * amount * product.price,
          };
        });
        return <CartProduct product={product} amount={amount} />;
      });
    setCartProducts(productElements);
  }, [state]);

  const priceFormatter = new Intl.NumberFormat("sv-SE", {
    style: "currency",
    currency: "SEK",
  });
  const vat = priceFormatter.format(prices.vat);

  const vatComponent = <h6>{vat} moms</h6>;

  return (
    <>
      <Flex justify="center">
        <h1>Cart Overview</h1>
      </Flex>
      <Flex justify="center">
        <Flex justify="space-between" width="75%">
          <Flex isVertical width="75%">
            {cartProducts}
          </Flex>
          <Flex isVertical width="25%">
            <h3>{priceFormatter.format(prices.prices + prices.vat)} Pris</h3>
            {vatComponent}
            <h5>{priceFormatter.format(prices.prices)} exkl moms </h5>
          </Flex>
        </Flex>
      </Flex>
    </>
  );
};

export default CartOverview;
