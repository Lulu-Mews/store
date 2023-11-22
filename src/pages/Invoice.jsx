import React from "react";
import Flex from "../component/shared/Flex/Flex";
import Border from "../component/shared/Border/Border";
import { useLocation } from "react-router-dom";
import { useGetCarts } from "../context/cartContext";
import Button from "../component/shared/Button/Button";
const deliveryPrice = (deliveryMethod) => {
  switch (deliveryMethod) {
    case "Pickup":
      return 0;
    case "PostNord":
      return 49;
    case "DHL":
      return 69;
    case "Fedex":
      return 90;
    default:
      return 0;
  }
};
function Invoice() {
  const { state } = useLocation();
  const [cart] = useGetCarts();
  const localCart = state.delivery
    ? [
        ...cart,
        { description: state.delivery, price: deliveryPrice(state.delivery) },
      ]
    : cart;

  const {
    firstName,
    lastName,
    eMail,
    telephone,
    postalCode,
    houseNumber,
    city,
    street,
  } = state?.user || {};

  return (
    <Flex justify="center">
      <Border border="1px solid black">
        <Flex
          width="500px"
          isVertical
          spacing={{ top: "24px", right: "24px", bottom: "24px", left: "24px" }}
        >
          <style>{"@media print {.noPrint{display:none;}}"}</style>
          <Flex justify="center" className="noPrint">
            <Button onClick={window.print}>Print out invoice</Button>
          </Flex>
          <Flex spacing={{ bottom: "24px" }}>
            <Flex flex="1" isVertical>
              <Flex>
                {firstName} {lastName}
              </Flex>
              <Flex>{eMail}</Flex>
              <Flex>{telephone}</Flex>
            </Flex>
            <Flex flex="1" align="end" justify="end" isVertical>
              <Flex>
                {street} {houseNumber}
              </Flex>
              <Flex>{city}</Flex>
              <Flex>{postalCode}</Flex>
            </Flex>
          </Flex>
          <Border border="1px solid black">
            {localCart
              .reduce((acc, curr) => {
                if (!acc.find((a) => a.id === curr.id)) acc.push(curr);
                return acc;
              }, [])
              .sort((a, b) => a.name > b.name)
              .map((product) => (
                <Flex justify="space-between">
                  <Flex flex="1">{product.description}</Flex>
                  <Border
                    borderLeft="1px dashed black"
                    borderRight="1px dashed black"
                  >
                    <Flex width="60px" justify="center">
                      {cart.reduce(
                        (acc, item) =>
                          item.id === product.id ? (acc += 1) : acc,
                        0
                      ) || ""}
                    </Flex>
                  </Border>
                  <Flex width="80px" justify="end">
                    {product.price}kr
                  </Flex>
                </Flex>
              ))}
          </Border>
        </Flex>
        <Flex justify="end" spacing={{ right: "24px", bottom: "24px" }}>
          <Border border="1px dashed black">
            <Flex
              isVertical
              spacing={{
                top: "8px",
                right: "24px",
                bottom: "8px",
                left: "24px",
              }}
            >
              <Flex justify="space-between">
                <Flex spacing={{ right: "8px" }}>Total Price:</Flex>
                {localCart.reduce(
                  (acc, item) =>
                    (acc += item.vat
                      ? item.price * (item.vat + 1)
                      : item.price),
                  0
                )}
                kr
              </Flex>
              <Flex justify="space-between">
                <Flex spacing={{ right: "8px" }}>vat/moms:</Flex>
                {localCart.reduce(
                  (acc, item) => (acc += item.vat ? item.price * item.vat : 0),
                  0
                )}
                kr
              </Flex>
            </Flex>
          </Border>
        </Flex>
      </Border>
    </Flex>
  );
}

export default Invoice;
