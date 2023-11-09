import { useGetCarts } from "../../context/cartContext";

const CartProduct = ({ product, amount }) => {
  const [_, setState] = useGetCarts();

  const priceFormatter = new Intl.NumberFormat("sv-SE", {
    style: "currency",
    currency: "SEK",
  });
  const vat = priceFormatter.format(product.price * product.vat);
  const totalSum = priceFormatter.format(product.price + product.vat);

  <h6>Total Pris {totalSum}</h6>;
  const vatComponent = (
    <h6>
      Moms ({product.vat * 100}%) : {vat}
    </h6>
  );

  const addAmount = () => {
    setState((state) => [...state, product]);
  };

  const removeAmount = () => {
    setState((state) => {
      // get the first item that is the current product
      const firstIndex = state.findIndex((e) => e.id === product.id);
      // remove that item by filtering the array to return everything except that item
      return state.filter((_, index) => index !== firstIndex);
    });
  };

  const removeAll = () => {
    setState((state) => {
      // remove all items that have the same id
      return state.filter((localProduct) => localProduct.id !== product.id);
    });
  };

  return (
    <div className="cartProductContainer">
      <div className="imgNameContainer">
        <img src={product.images[0]} className="product images" alt="" />
        {product.name}
      </div>
      <div className="priceActionContainer">
        {priceFormatter.format(product.price * amount)}
        <div>
          <button
            className="detail__button"
            disabled={amount === 1}
            onClick={removeAmount}
          >
            -
          </button>
          {amount}
          <button className="detail__button" onClick={addAmount}>
            +
          </button>
          <button className="detail__button" onClick={removeAll}>
            x
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartProduct;
