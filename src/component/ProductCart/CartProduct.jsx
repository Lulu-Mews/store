import { useGetCarts } from "../../context/cartContext";
import Flex from "../shared/Flex/Flex";
import Button from "../shared/Button/Button";
import Image from "../shared/Image/Image";

const CartProduct = ({ product, amount }) => {
  const [_, setState] = useGetCarts();

  const priceFormatter = new Intl.NumberFormat("sv-SE", {
    style: "currency",
    currency: "SEK",
  });

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
    <Flex spacing={{ left: "18px", bottom: "18px" }} width="60%">
      <Flex>
        <Image
          width="25%"
          spacing={{ right: "18px" }}
          src={product.images[0]}
          alt=""
        />
        {product.name}
      </Flex>
      <Flex align="start" isVertical>
        {priceFormatter.format(product.price * amount)}
        <Flex>
          <Button disabled={amount === 1} onClick={removeAmount}>
            -
          </Button>
          <h2 style={{ margin: 0 }}>{amount}</h2>
          <Button onClick={addAmount}>+</Button>
          <Button onClick={removeAll}>x</Button>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default CartProduct;
