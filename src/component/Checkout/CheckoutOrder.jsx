import Button from "../shared/Button";
import { useNavigate } from "react-router-dom";
import { validateDelivery, validateUser } from "./validators";

function CheckoutOrder({ user, delivery, setHasPressedOrder }) {
  const navigate = useNavigate();

  const clickOrder = () => {
    setHasPressedOrder(true);
    if (!validateUser(user) && !validateDelivery(delivery))
      navigate(`/invoice`, { state: { user, delivery } });
  };
  return <Button onClick={clickOrder}>Order</Button>;
}

export default CheckoutOrder;
