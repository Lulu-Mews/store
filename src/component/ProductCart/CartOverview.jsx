import { useGetCarts } from "../../context/cartContext";
import CartProduct from "./CartProduct";

const CartOverview = () => {
  const [state] = useGetCarts();
  let totalPrice = 0;
  let totalVat = 0;

  const productElements = state
    .filter((a, index) => {
      return state.indexOf(a) === index;
    })
    .sort((a, b) => a.name > b.name)
    .map((product) => {
      const amount = state.reduce((acc, localProduct) => {
        return localProduct.name === product.name ? acc + 1 : acc;
      }, 0);
      totalPrice += product.price * amount;
      totalVat += product.price * product.vat * amount;
      return <CartProduct product={product} amount={amount} />;
    });

  const priceFormatter = new Intl.NumberFormat("sv-SE", {
    style: "currency",
    currency: "SEK",
  });
  const vat = priceFormatter.format(totalVat);

  const vatComponent = <h6>{vat} moms</h6>;

  return (
    <>
      <h1>Cart Overview</h1>

      <div className="totalSum">
        <div>{productElements}</div>
        <div>
          <h3>{priceFormatter.format(totalPrice + totalVat)} Pris</h3>
          {vatComponent}
          <h5>{priceFormatter.format(totalPrice)} exkl moms </h5>
        </div>
      </div>
    </>
  );
};

export default CartOverview;
