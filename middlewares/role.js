const ApiError = require("../utils/error");

module.exports = (roles) => {
  return (req, res, next) => {
    try {
      if (!roles.includes(req.user.role)) {
        return next(
          new ApiError(401, "You are not allowed to access this route")
        );
      }
      next();
    } catch (error) {
      return next(new ApiError(401, error.message));
    }
  };
};
