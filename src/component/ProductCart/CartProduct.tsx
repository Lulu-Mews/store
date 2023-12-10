import { useGetCarts } from "../../context/cartContext";
import Flex from "../shared/Flex";
import Button from "../shared/Button";
import Image from "../shared/Image";
import { Product } from "../../interfaces";

const CartProduct: React.FC<{ product: Product; amount: number }> = ({
  product,
  amount,
}) => {
  const isMobile = (window.visualViewport?.width || 0) < 500;
  const [, setState] = useGetCarts();

  const priceFormatter = new Intl.NumberFormat("sv-SE", {
    style: "currency",
    currency: "SEK",
  });

  const addAmount = () => {
    setState?.((state) => [...state, product]);
  };

  const removeAmount = () => {
    setState?.((state) => {
      // get the first item that is the current product
      const firstIndex = state.findIndex((e) => e.id === product.id);
      // remove that item by filtering the array to return everything except that item
      return state.filter((_, index) => index !== firstIndex);
    });
  };

  const removeAll = () => {
    setState?.((state) => {
      // remove all items that have the same id
      return state.filter((localProduct) => localProduct.id !== product.id);
    });
  };

  return (
    <Flex
      spacing={{ left: isMobile ? "0px" : "18px", bottom: "18px" }}
      width={isMobile ? "100%" : "60%"}
    >
      <Flex width="100%">
        <Image
          width="25%"
          spacing={{ right: "18px" }}
          src={product.images?.[0]}
          alt=""
        />
        <Flex width="50%">{product.name}</Flex>
      </Flex>
      <Flex align="end" width="20%" isVertical>
        {priceFormatter.format(
          (product.price || 0) * amount * ((product.vat || 0) + 1)
        )}
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
