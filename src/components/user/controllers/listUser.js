const { userDAO } = require("../../../DAO");

const listUser = async (req, res, next) => {
  try {
    const page = req.query.page;
    const resp = await userDAO.listUser(page);
    res.status(200).json({
      status: true,
      message: "User deleted",
      data: resp,
    });
  } catch (error) {
    console.error(error);
    next(error);
  }
};

module.exports = { listUser };
