const emailRegex = /^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/;

const isEmailValid = (email) => {
  return emailRegex.test(email);
};

const isPasswordValid = (password) => {
  return password.length >= 8;
};

const isNameValid = (name) => {
  return name.length >= 3;
};

module.exports = {
  isEmailValid,
  isPasswordValid,
  isNameValid,
};
