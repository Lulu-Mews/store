function validateUser(user) {
  if (!user?.houseNumber) return "Please enter a house number.";

  return "";
}

export default validateUser;
