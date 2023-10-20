const { User } = require("../models");
const ApiError = require("../utils/error");
const { generateToken } = require("../utils/jwt");
const {
  isNameValid,
  isEmailValid,
  isPasswordValid,
} = require("../utils/validation");

const register = async (req, res, next) => {
  try {
    const { email, password, name } = req.body;
    if (!isNameValid(name)) {
      return next(new ApiError(400, "Name must be at least 3 characters"));
    }
    if (!isEmailValid(email)) {
      return next(new ApiError(400, "Email is not a valid email address"));
    }
    if (!isPasswordValid(password)) {
      return next(new ApiError(400, "Password must be at least 8 characters"));
    }
    const existingUser = await User.findOne({ where: { email } });
    if (existingUser) {
      return next(new ApiError(400, "Email address already registered"));
    }
    const role = req.body.role;
    if (role === "admin" || role === "superadmin") {
      return next(new ApiError(403, "Forbidden access"));
    }
    const user = await User.create({
      ...req.body,
      role: "member",
    });
    res.status(201).json({
      status: "success",
      message: "User registered successfully",
      data: user,
    });
  } catch (error) {
    return next(new ApiError(500, error.message));
  }
};

const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    if (!isEmailValid(email)) {
      return next(new ApiError(400, "Email is not a valid email address"));
    }
    if (!isPasswordValid(password)) {
      return next(new ApiError(400, "Password must be at least 8 characters"));
    }
    const user = await User.findOne({ where: { email } });
    if (!user) {
      return next(new ApiError(404, "Email address not registered"));
    }
    const isMatch = await user.validPassword(password);
    if (!isMatch) {
      return next(new ApiError(401, "Password not match"));
    }
    const token = generateToken(user);
    res.status(200).json({
      status: "success",
      message: "User login successfully",
      data: {
        token,
      },
    });
  } catch (error) {
    return next(new ApiError(500, error.message));
  }
};

const check = async (req, res, next) => {
  try {
    const user = req.user;
    res.status(200).json({
      status: "success",
      data: {
        id: user.id,
        name: user.name,
        email: user.email,
        role: user.role,
      },
    });
  } catch (error) {
    return next(new ApiError(500, error.message));
  }
};

const addAdmin = async (req, res, next) => {
  try {
    const user = await User.create({
      ...req.body,
      role: "admin",
    });
    res.status(201).json({
      status: "success",
      message: "User created successfully",
      data: user,
    });
  } catch (error) {
    return next(new ApiError(500, error.message));
  }
};

module.exports = {
  register,
  login,
  check,
  addAdmin,
};
