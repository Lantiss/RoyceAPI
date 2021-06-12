const userController = require("./userController");
const userValidator = require("./userValidator");

const userRouter = (router) => {
  router
    .post(
      "/user",
      userValidator.createUserValidation,
      userController.createUser
    )
    // .get("/users", ) 2
    .get(
      "/user/:id",
      userValidator.getUserByIdValidation,
      userController.getUserById
    );
  // .patch("/user/:id", ) 3
  // .delete("/user/:id", ) 1
};

module.exports = { userRouter };
