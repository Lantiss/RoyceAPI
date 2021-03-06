const userController = require("./userController");
const userValidator = require("./userValidator");

const userRouter = (router) => {
  router
    .post(
      "/user",
      userValidator.createUserValidation,
      userController.createUser
    )
    .get("/users", userValidator.listUserValidation, userController.listUser)
    .get(
      "/user/:id",
      userValidator.getUserByIdValidation,
      userController.getUserById
    )
    .patch(
      "/user/:id",
      userValidator.updateUserValidation,
      userController.updateUser
    )
    .delete(
      "/user/:id",
      userValidator.getUserByIdValidation,
      userController.deleteUser
    );
};

module.exports = { userRouter };
