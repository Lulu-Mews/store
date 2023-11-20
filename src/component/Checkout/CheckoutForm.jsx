import React from "react";

const CheckoutForm = ({ user, setUser }) => {
  const inputChange = (e, name) => {
    const value = e.currentTarget.value;

    setUser?.((localState) => {
      return { ...localState, [name]: value };
    });
  };
  return (
    <>
      <input
        value={user?.firstName}
        onChange={(e) => inputChange(e, "firstName")}
        type="text"
        placeholder="First Name"
      />
      <input
        value={user?.lastName}
        onChange={(e) => inputChange(e, "lastName")}
        type="text"
        placeholder="Last Name"
      />
      <input
        value={user?.eMail}
        onChange={(e) => inputChange(e, "eMail")}
        type="email"
        placeholder="E-mail"
      />
      <input
        value={user?.telephone}
        onChange={(e) => inputChange(e, "telephone")}
        type="text"
        placeholder="Telephone"
      />
      <input
        value={user?.postalCode}
        onChange={(e) => inputChange(e, "postalCode")}
        type="text"
        placeholder="Postal Code"
      />
      <input
        value={user?.houseNumber}
        onChange={(e) => inputChange(e, "houseNumber")}
        type="text"
        placeholder="House Number"
      />
      <input
        value={user?.city}
        onChange={(e) => inputChange(e, "city")}
        type="text"
        placeholder="City"
      />
      <input
        value={user?.street}
        onChange={(e) => inputChange(e, "street")}
        type="text"
        placeholder="Street"
      />
    </>
  );
};
export default CheckoutForm;
