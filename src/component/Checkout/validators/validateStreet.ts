import { User } from "../interfaces";

function validateStreet(user?: User): string {
  if (!user?.street) return "Please enter a street.";
  return "";
}

export default validateStreet;
