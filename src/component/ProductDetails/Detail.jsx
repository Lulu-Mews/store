import React from "react";
import { useGetCarts } from "../../context/cartContext";

function Detail(item) {
  const [_, setState] = useGetCarts();
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
        <div className="detail__content">
          <img src={item.images[0]} className="detail__image" alt="" />
          <div>
            <h4>{item.name}</h4>
            <p>{item.details}</p>
          </div>
        </div>
        <div>
          <h3>{priceFormatter.format(item.price)}</h3>

          {item.vat && vatComponent}
          <button className="detail__button" onClick={clickHandler}>
            add to cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default Detail;
