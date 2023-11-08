import { useGetCarts } from "../../context/cartContext";
import CartProduct from "./CartProduct";

const CartOverview = () => {
  const [state] = useGetCarts();
  console.log(state);
  const productElements = state
    .filter((a, index) => {
      return state.indexOf(a) === index;
    })
    .sort((a, b) => a.name > b.name)
    .map((product) => {
      const amount = state.reduce((acc, localProduct) => {
        return localProduct.name === product.name ? acc + 1 : acc;
      }, 0);
      return <CartProduct product={product} amount={amount} />;
    });

  const totalPriceSum = (acc, product) => {
    return acc + product.price;
  };

  return (
    <>
      <h3>"product information"</h3>
      <h3>{state.reduce(totalPriceSum, 0)}€</h3>
      {productElements}
    </>
  );
};

export default CartOverview;
