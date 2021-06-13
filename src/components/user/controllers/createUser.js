const { userDAO } = require("../../../DAO");

const createUser = async (req, res, next) => {
  try {
    const user = req.body;
    const resp = await userDAO.saveUser(user);
    res.status(201).json({
      status: true,
      message: "User created",
      data: resp,
    });
  } catch (error) {
    console.error(error);
    next(error);
  }
};

module.exports = { createUser };
