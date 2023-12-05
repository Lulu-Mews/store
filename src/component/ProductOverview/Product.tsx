import { useNavigate } from "react-router-dom";
import Image from "../shared/Image/Image";
import Flex from "../shared/Flex/Flex";
import { Product as ProductProp } from "../../interfaces";

const Product: React.FC<ProductProp> = (item) => {
  const isMobile = (window.visualViewport?.width || 0) < 500;
  const navigate = useNavigate();
  const clickHandler = () => {
    navigate(`/product/${item.id}`);
  };
  const priceFormatter = new Intl.NumberFormat("sv-SE", {
    style: "currency",
    currency: "SEK",
  });
  return (
    <Flex
      width={isMobile ? "100%" : "calc(25% - 16px)"}
      isVertical
      spacing={{ right: "16px", bottom: "16px" }}
      onClick={clickHandler}
    >
      {item.images?.[0] && <Image src={item.images[0]} alt="" />}
      <Flex height="100%" isVertical justify="space-between">
        <h6 style={{ margin: 0 }}>{item.name}</h6>
        <Flex justify="end" align="end" isVertical>
          {priceFormatter.format(item.price)}
          <h6 style={{ margin: 0 }}>{item.category}</h6>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Product;
