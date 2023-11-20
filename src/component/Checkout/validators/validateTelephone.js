function validateUser(user) {
  if (!user?.telephone) return "Please enter a phone number.";

  return "";
}

export default validateUser;
