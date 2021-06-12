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
    if (!userResp) {
      throw {
        message: "User doesn't exist",
        status: 400,
      };
    }
    return userResp;
  } catch (error) {
    throw error;
  }
};

const listUser = async (page) => {
  try {
    const limit = 5;
    const offset = page ? (page - 1) * limit : 0;
    const userResp = await User.findAndCountAll({ limit, offset });

    userResp.total_pages = Math.ceil(userResp.count / limit);
    userResp.page_num = ((offset / limit) + 1);

    return userResp;
  } catch (error) {
    throw error;
  }
};

const deleteUser = async (id) => {
  try {
    const userResp = await User.findByPk(id);
    if (!userResp) {
      throw {
        message: "User doesn't exist",
        status: 400,
      };
    }
    const deletedUser = await userResp.destroy();
    return deletedUser;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  saveUser,
  getUserById,
  listUser,
  deleteUser,
};
