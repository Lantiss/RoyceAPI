const { userDAO } = require("../../../DAO");

const getUserById = async (req, res, next) => {
  try {
    const id = req.params.id;
    const resp = await userDAO.getUserById(id);

    res.status(200).json({
      status: true,
      message: "User found",
      data: resp,
    });
  } catch (error) {
    console.error(error);
    next(error);
  }
};

module.exports = { getUserById };
