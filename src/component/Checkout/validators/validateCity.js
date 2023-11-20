function validateUser(user) {
  if (!user?.city) return "Please enter a city.";

  return "";
}

export default validateUser;
