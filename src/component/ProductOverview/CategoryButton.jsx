import React from "react";
import Button from "../shared/Button/Button";
import { useNavigate } from "react-router-dom";

function CategoryButton({ category }) {
  const navigate = useNavigate();
  const clickHandler = () => {
    navigate(`/products/${category}`);
  };

  return <Button onClick={clickHandler}>{category}</Button>;
}

export default CategoryButton;
