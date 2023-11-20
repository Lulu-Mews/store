import Header from "../component/shared/Header/Header";
import Flex from "../component/shared/Flex/Flex";
import CheckoutWrapper from "../component/Checkout/CheckoutWrapper";

const Checkout = () => {
  return (
    <>
      <Header />
      <CheckoutWrapper />
      <Flex spacing={{ top: "24px" }} />
    </>
  );
};

export default Checkout;
