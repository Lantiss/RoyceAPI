const { User } = require("../db/models");

const saveUser = async (user) => {
  try {
    const userResp = await User.create(user);
    return userResp;
  } catch (error) {
    throw error;
  }
};

const getUserById = async (id) => {
  try {
    const userResp = await User.findByPk(id);
    return userResp;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  saveUser,
  getUserById,
};
