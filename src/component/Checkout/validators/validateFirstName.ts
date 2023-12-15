import { User } from "../interfaces";

function validateFirstName(user?: User): string {
  if (!user?.firstName) return "Please enter a first name.";

  return "";
}

export default validateFirstName;
