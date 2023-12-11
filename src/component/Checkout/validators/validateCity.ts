import { User } from "../interfaces";

function validateCity(user?: User): string {
  if (!user?.city) return "Please enter a city.";

  return "";
}

export default validateCity;
