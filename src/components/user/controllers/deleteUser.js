const { userDAO } = require("../../../DAO");

const deleteUser = async (req, res, next) => {
  try {
    const id = req.params.id;
    const resp = await userDAO.deleteUser(id);

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

module.exports = { deleteUser };
