import React from "react";
import Text from "../shared/Text/Text";
import {
  validateCity,
  validateEmail,
  validateFirstName,
  validateHouseNumber,
  validateLastName,
  validatePostalCode,
  validateStreet,
  validateTelephone,
} from "./validators";

const CheckoutForm = ({ user, setUser, hasPressedOrder }) => {
  const inputChange = (e, name) => {
    const value = e.currentTarget.value;

    setUser?.((localState) => {
      return { ...localState, [name]: value };
    });
  };
  return (
    <>
      <input
        value={user?.firstName || ""}
        onChange={(e) => inputChange(e, "firstName")}
        type="text"
        placeholder="First Name"
      />
      <Text fontSize="10px" color="red">
        {hasPressedOrder && validateFirstName(user)}
      </Text>

      <input
        value={user?.lastName || ""}
        onChange={(e) => inputChange(e, "lastName")}
        type="text"
        placeholder="Last Name"
      />
      <Text fontSize="10px" color="red">
        {hasPressedOrder && validateLastName(user)}
      </Text>

      <input
        value={user?.eMail || ""}
        onChange={(e) => inputChange(e, "eMail")}
        type="email"
        placeholder="E-mail"
      />
      <Text fontSize="10px" color="red">
        {hasPressedOrder && validateEmail(user)}
      </Text>

      <input
        value={user?.telephone || ""}
        onChange={(e) => inputChange(e, "telephone")}
        type="text"
        placeholder="Telephone"
      />
      <Text fontSize="10px" color="red">
        {hasPressedOrder && validateTelephone(user)}
      </Text>

      <input
        value={user?.postalCode || ""}
        onChange={(e) => inputChange(e, "postalCode")}
        type="text"
        placeholder="Postal Code"
      />
      <Text fontSize="10px" color="red">
        {hasPressedOrder && validatePostalCode(user)}
      </Text>

      <input
        value={user?.city || ""}
        onChange={(e) => inputChange(e, "city")}
        type="text"
        placeholder="City"
      />
      <Text fontSize="10px" color="red">
        {hasPressedOrder && validateCity(user)}
      </Text>

      <input
        value={user?.street || ""}
        onChange={(e) => inputChange(e, "street")}
        type="text"
        placeholder="Street"
      />
      <Text fontSize="10px" color="red">
        {hasPressedOrder && validateStreet(user)}
      </Text>

      <input
        value={user?.houseNumber || ""}
        onChange={(e) => inputChange(e, "houseNumber")}
        type="text"
        placeholder="House Number"
      />
      <Text fontSize="10px" color="red">
        {hasPressedOrder && validateHouseNumber(user)}
      </Text>
    </>
  );
};
export default CheckoutForm;
