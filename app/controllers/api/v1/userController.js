const userService = require("../../../services/userService");

const register = async (req, res, next) => {
  try {
    const userData = req.body;
    const user = await userService.registerUser(userData);
    res.status(201).json({
      status: "success",
      message: "User registered successfully",
      data: user,
    });
  } catch (error) {
    return next(error);
  }
};

const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const token = await userService.loginUser(email, password);
    res.status(200).json({
      status: "success",
      message: "User login successfully",
      data: {
        token,
      },
    });
  } catch (error) {
    return next(error);
  }
};

const check = async (req, res, next) => {
  try {
    const user = req.user;
    const userProfile = await userService.getUserProfile(user);
    res.status(200).json({
      status: "success",
      data: userProfile,
    });
  } catch (error) {
    return next(error);
  }
};

const addAdmin = async (req, res, next) => {
  try {
    const userData = req.body;
    const user = await userService.createAdminUser(userData);
    res.status(201).json({
      status: "success",
      message: "User created successfully",
      data: user,
    });
  } catch (error) {
    return next(error);
  }
};

module.exports = {
  register,
  login,
  check,
  addAdmin,
};
