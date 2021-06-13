const { userDAO } = require("../../../DAO");

const updateUser = async (req, res, next) => {
  try {
    const changes = req.body;
    const id = req.params.id;
    const resp = await userDAO.updateUser(changes, id);
    res.status(201).json({
      status: true,
      message: "User updated",
      data: resp,
    });
  } catch (error) {
    console.error(error);
    next(error);
  }
};

module.exports = { updateUser };
