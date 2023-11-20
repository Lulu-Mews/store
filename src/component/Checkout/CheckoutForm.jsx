import React from "react";

const CheckoutForm = ({ setUser }) => {
  const inputChange = (e, name) => {
    const value = e.currentTarget.value;

    setUser?.((localState) => {
      return { ...localState, [name]: value };
    });
  };
  return (
    <>
      <input
        value=""
        onChange={(e) => inputChange(e, "firstName")}
        type="text"
        placeholder="First Name"
      />
      <input
        value=""
        onChange={(e) => inputChange(e, "lastName")}
        type="text"
        placeholder="Last Name"
      />
      <input
        value=""
        onChange={(e) => inputChange(e, "eMail")}
        type="email"
        placeholder="E-mail"
      />
      <input
        value=""
        onChange={(e) => inputChange(e, "telephone")}
        type="text"
        placeholder="Telephone"
      />
      <input
        value=""
        onChange={(e) => inputChange(e, "postalCode")}
        type="text"
        placeholder="Postal Code"
      />
      <input
        value=""
        onChange={(e) => inputChange(e, "houseNumber")}
        type="text"
        placeholder="House Number"
      />
      <input
        value=""
        onChange={(e) => inputChange(e, "city")}
        type="text"
        placeholder="City"
      />
      <input
        value=""
        onChange={(e) => inputChange(e, "street")}
        type="text"
        placeholder="Street"
      />
    </>
  );
};
export default CheckoutForm;
