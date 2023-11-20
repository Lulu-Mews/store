function validateUser(user) {
  if (!user?.street) return "Please enter a street.";
  return "";
}

export default validateUser;
