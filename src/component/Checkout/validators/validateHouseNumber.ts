import { User } from "../interfaces";

function validateHouseNumber(user?: User): string {
  if (!user?.houseNumber) return "Please enter a house number.";

  return "";
}

export default validateHouseNumber;
