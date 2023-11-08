import React from "react";
import { useGetCarts } from "../../context/cartContext";

function Detail(item) {
  const [_, setState] = useGetCarts();
  const clickHandler = () => {
    setState((state) => [...state, item]);
  };

  const vatComponent = (
    <h6>
      BTW/VAT ({item.vat * 100}%) : {item.price * item.vat}€
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
          <h3>{item.price}€</h3>
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
