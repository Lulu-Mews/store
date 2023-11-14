import Header from "../component/shared/Header/Header";
import CartOverview from "../component/ProductCart/CartOverview";
import Flex from "../component/shared/Flex/Flex";
const Shoppingcart = () => {
  return (
    <>
      <Header />
      <Flex spacing={{ top: "24px" }} />
      <CartOverview />
    </>
  );
};

export default Shoppingcart;
