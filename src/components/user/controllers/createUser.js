const { userDAO } = require("../../../DAO");

const createUser = async (req, res, next) => {
  try {
    const body = req.body;
    console.log(body);
    const user = {
      name: body.name,
      dob: body.dob,
      address: body.address,
      description: body.description,
    };
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
