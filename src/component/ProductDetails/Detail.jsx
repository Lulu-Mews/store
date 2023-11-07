import React from "react";

function Detail(item) {
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
        <div className="detail__cart">
          <h3>{item.price}€</h3>
          <h6>
            BTW/VAT ({item.vat * 100}%) : {item.price * item.vat}€
          </h6>
          <button>Add to Cart</button>
        </div>
      </div>
    </div>
  );
}

export default Detail;
