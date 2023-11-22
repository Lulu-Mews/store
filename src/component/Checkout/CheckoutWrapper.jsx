import React, { useState } from "react";
import CheckoutForm from "./CheckoutForm";
import CheckoutDelivery from "./CheckoutDelivery";
import CheckoutOrder from "./CheckoutOrder";
import Flex from "../shared/Flex/Flex";

function CheckoutWrapper() {
  const [user, setUser] = useState({});
  const [hasPressedOrder, setHasPressedOrder] = useState(false);
  const [delivery, setDelivery] = useState();
  const isMobile = window.visualViewport.width < 500;
  return (
    <Flex justify="center">
      <Flex isVertical={isMobile} align="start" width="60%">
        <Flex isVertical width={isMobile ? "100%" : "15%"}>
          <CheckoutForm
            setUser={setUser}
            hasPressedOrder={hasPressedOrder}
            user={user}
          />
        </Flex>
        <CheckoutDelivery
          setDelivery={setDelivery}
          hasPressedOrder={hasPressedOrder}
          delivery={delivery}
        />
        <Flex align="start">
          <CheckoutOrder
            user={user}
            delivery={delivery}
            setHasPressedOrder={setHasPressedOrder}
          />
        </Flex>
      </Flex>
    </Flex>
  );
}

export default CheckoutWrapper;
