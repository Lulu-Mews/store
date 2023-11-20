function validateUser(user) {
  if (!user?.eMail) return "Please enter an email.";

  return "";
}

export default validateUser;
