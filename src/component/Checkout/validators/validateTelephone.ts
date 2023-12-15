import { User } from "../interfaces";

function validateTelephone(user?: User): string {
  if (!user?.telephone) return "Please enter a phone number.";

  return "";
}

export default validateTelephone;
