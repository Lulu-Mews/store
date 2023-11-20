function validateUser(user) {
  if (!user?.postalCode) return "Please enter a postal code.";

  return "";
}

export default validateUser;
