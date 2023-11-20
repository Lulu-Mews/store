function validateUser(user) {
  if (!user?.lastName) return "Please enter a last name.";

  return "";
}

export default validateUser;
