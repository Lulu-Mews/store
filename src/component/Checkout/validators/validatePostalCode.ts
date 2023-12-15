import { User } from "../interfaces";

function validatePostalCode(user?: User): string {
  if (!user?.postalCode) return "Please enter a postal code.";

  return "";
}

export default validatePostalCode;
