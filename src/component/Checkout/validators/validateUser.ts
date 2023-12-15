import {
  validateEmail,
  validateFirstName,
  validateHouseNumber,
  validateLastName,
  validatePostalCode,
  validateStreet,
  validateTelephone,
} from ".";
import { User } from "../interfaces";
import validateCity from "./validateCity";

const validateUser = (user?: User): string => {
  let returnString = "";
  returnString = validateCity(user) || returnString;
  returnString = validateEmail(user) || returnString;
  returnString = validateFirstName(user) || returnString;
  returnString = validateHouseNumber(user) || returnString;
  returnString = validateLastName(user) || returnString;
  returnString = validatePostalCode(user) || returnString;
  returnString = validateStreet(user) || returnString;
  returnString = validateTelephone(user) || returnString;
  return returnString;
};
export default validateUser;
