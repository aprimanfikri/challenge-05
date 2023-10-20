const { User } = require("../models");

const createUser = async (userData) => {
  return User.create(userData);
};

const findUserByEmail = async (email) => {
  return User.findOne({ where: { email } });
};

const createUserWithRole = async (userData, role) => {
  return User.create({
    ...userData,
    role,
  });
};

module.exports = {
  createUser,
  findUserByEmail,
  createUserWithRole,
};
