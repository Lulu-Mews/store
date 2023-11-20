function validateUser(user) {
  if (!user?.firstName) return "Please enter a first name.";

  return "";
}

export default validateUser;
