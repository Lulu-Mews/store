import React from "react";
import { useGetCarts } from "../../context/cartContext";
import Flex from "../shared/Flex/Flex";
import Image from "../shared/Image/Image";
import Button from "../shared/Button/Button";

function Detail(item) {
  const isMobile = window.visualViewport.width < 500;
  const [, setState] = useGetCarts();
  const clickHandler = () => {
    setState((state) => [...state, item]);
  };

  const priceFormatter = new Intl.NumberFormat("sv-SE", {
    style: "currency",
    currency: "SEK",
  });
  const vat = priceFormatter.format(item.price * item.vat);

  const vatComponent = (
    <h6>
      Moms ({item.vat * 100}%) : {vat}
    </h6>
  );

  return (
    <div className="detail__container">
      <div className="detail__wrapper">
        <Flex justify="center">
          <Flex
            width="75%"
            justify="space-between"
            isWrapping
            className="detail__content"
          >
            <Flex width={isMobile ? "100%" : "50%"} className="detail__content">
              <Image
                spacing={{ right: "18px" }}
                width="60%"
                src={item.images[0]}
                className="detail__image"
                alt=""
              />
              <div>
                <h4>{item.name}</h4>
                <p>{item.details}</p>
              </div>
            </Flex>

            <div>
              <h3>{priceFormatter.format(item.price)}</h3>

              {item.vat && vatComponent}
              <Button onClick={clickHandler}>add to cart</Button>
            </div>
          </Flex>
        </Flex>
      </div>
    </div>
  );
}

export default Detail;
