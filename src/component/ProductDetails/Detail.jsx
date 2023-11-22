import React from "react";
import { useGetCarts } from "../../context/cartContext";
import Flex from "../shared/Flex/Flex";
import Image from "../shared/Image/Image";
import Button from "../shared/Button/Button";
import Border from "../shared/Border/Border";

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
            <Flex
              isVertical={isMobile}
              width={isMobile ? "100%" : "50%"}
              className="detail__content"
            >
              <Image
                spacing={{ right: "18px" }}
                width={isMobile ? "100%" : "60%"}
                src={item.images[0]}
                className="detail__image"
                alt=""
              />
              <Border border="2px solid black">
                <div>
                  <Border border="1px ridge black">
                    <Flex spacing={{ left: "18px", right: "18px" }}>
                      <h4>{item.description}</h4>
                    </Flex>
                  </Border>

                  <Border borderTop="2px solid black">
                    <Flex spacing={{ left: "18px", right: "18px" }}>
                      <p>{item.details}</p>
                    </Flex>
                  </Border>
                </div>
              </Border>
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
