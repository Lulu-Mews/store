import React from "react";
import { useNavigate } from "react-router-dom";
import Image from "../shared/Image/Image";
import Flex from "../shared/Flex/Flex";

function Product(item) {
  const navigate = useNavigate();
  const clickHandler = () => {
    navigate(`/product/${item.id}`);
  };
  return (
    <Flex
      width="25%"
      isVertical
      className="product__wrapper"
      onClick={clickHandler}
    >
      <Image src={item.images[0]} className="product__image" alt="" />
      {item.description}
    </Flex>
  );
}

export default Product;
