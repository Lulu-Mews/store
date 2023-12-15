import { User } from "../interfaces";

function validateLastName(user?: User): string {
  if (!user?.lastName) return "Please enter a last name.";

  return "";
}

export default validateLastName;
