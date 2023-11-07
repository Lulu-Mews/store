import React from "react";
import "./Products.css";
import { useNavigate } from "react-router-dom";

function Product(item) {
  const navigate = useNavigate();
  const clickHandler = () => {
    navigate(`/product/${item.id}`);
  };
  return (
    <div className="product__wrapper" onClick={clickHandler}>
      <img src={item.images[0]} className="product__image" alt="" />
      {item.description}
    </div>
  );
}

export default Product;
