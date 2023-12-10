import Button from "../shared/Button";
import { useNavigate } from "react-router-dom";
import { Product } from "../../interfaces";

const CategoryButton: React.FC<Partial<Product>> = ({ category }) => {
  const navigate = useNavigate();
  const clickHandler = () => {
    navigate(`/products/${category}`);
  };

  return <Button onClick={clickHandler}>{category}</Button>;
};

export default CategoryButton;
