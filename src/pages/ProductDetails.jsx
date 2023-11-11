import { useParams } from "react-router-dom";
import Header from "../component/shared/Header/Header";
import ProductDetailsComponent from "../component/ProductDetails/ProductDetails";

const ProductDetails = () => {
  const { id } = useParams();

  return (
    <>
      <Header />
      <ProductDetailsComponent id={id} />
    </>
  );
};

export default ProductDetails;
