import { useParams } from "react-router-dom";
import Header from "../component/shared/Header/Header";
import ProductDetailsComponent from "../component/ProductDetails/ProductDetails";
import Flex from "../component/shared/Flex/Flex";

const ProductDetails = () => {
  const { id } = useParams();

  return (
    <>
      <Header />
      <Flex spacing={{ top: "24px" }} />
      <ProductDetailsComponent id={id} />
    </>
  );
};

export default ProductDetails;
