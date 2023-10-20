const userRepository = require("../repositories/userRepository");
const { generateToken } = require("../utils/jwt");
const ApiError = require("../utils/error");
const {
  isNameValid,
  isEmailValid,
  isPasswordValid,
} = require("../utils/validation");

const registerUser = async (userData) => {
  const { email, name, role } = userData;

  if (!isNameValid(name)) {
    throw new ApiError(400, "Name must be at least 3 characters");
  }

  if (!isEmailValid(email)) {
    throw new ApiError(400, "Email is not a valid email address");
  }

  if (!isPasswordValid(userData.password)) {
    throw new ApiError(400, "Password must be at least 8 characters");
  }

  const existingUser = await userRepository.findUserByEmail(email);

  if (existingUser) {
    throw new ApiError(400, "Email address already registered");
  }

  if (role === "admin" || role === "superadmin") {
    throw new ApiError(403, "Forbidden access");
  }

  const user = await userRepository.createUserWithRole(userData, "member");
  return user;
};

const loginUser = async (email, password) => {
  if (!isEmailValid(email)) {
    throw new ApiError(400, "Email is not a valid email address");
  }

  if (!isPasswordValid(password)) {
    throw new ApiError(400, "Password must be at least 8 characters");
  }

  const user = await userRepository.findUserByEmail(email);

  if (!user) {
    throw new ApiError(404, "Email address not registered");
  }

  const isMatch = await user.validPassword(password);

  if (!isMatch) {
    throw new ApiError(401, "Password not match");
  }

  const token = generateToken(user);
  return token;
};

const getUserProfile = async (user) => {
  return {
    id: user.id,
    name: user.name,
    email: user.email,
    role: user.role,
  };
};

const createAdminUser = async (userData) => {
  const user = await userRepository.createUserWithRole(userData, "admin");
  return user;
};

module.exports = {
  registerUser,
  loginUser,
  getUserProfile,
  createAdminUser,
};
