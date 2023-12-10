import Flex from "../shared/Flex";
import Text from "../shared/Text";
import { validateDelivery } from "./validators";

function CheckoutDelivery({ setDelivery, hasPressedOrder, delivery }) {
  return (
    <Flex isVertical>
      <Flex>
        <input
          onChange={(e) => setDelivery(e.currentTarget.value)}
          type="radio"
          name="Order_Method"
          value="Pickup"
          id="pickup"
        />
        <label htmlFor="pickup">Pickup</label>
      </Flex>
      <Flex>
        <input
          onChange={(e) => setDelivery(e.currentTarget.value)}
          type="radio"
          name="Order_Method"
          value="PostNord"
          id="postnord"
        />
        <label htmlFor="postnord">PostNord</label>
      </Flex>
      <Flex>
        <input
          onChange={(e) => setDelivery(e.currentTarget.value)}
          type="radio"
          name="Order_Method"
          value="DHL"
          id="dhl"
        />
        <label htmlFor="dhl">DHL</label>
      </Flex>
      <Flex>
        <input
          onChange={(e) => setDelivery(e.currentTarget.value)}
          type="radio"
          name="Order_Method"
          value="Fedex"
          id="fedex"
        />
        <label htmlFor="fedex">Fedex</label>
      </Flex>
      <Text fontSize="10px" color="red">
        {hasPressedOrder && validateDelivery(delivery)}
      </Text>
    </Flex>
  );
}

export default CheckoutDelivery;
