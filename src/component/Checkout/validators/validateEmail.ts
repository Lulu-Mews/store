import { User } from "../interfaces";

function validateEmail(user?: User): string {
  if (!user?.email) return "Please enter an email.";

  return "";
}

export default validateEmail;
