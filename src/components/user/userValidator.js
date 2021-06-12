const { createUserValidation } = require("./validations/createUserValidation");
const { getUserByIdValidation } = require("./validations/getUserByIdValidation");

module.exports = {
    createUserValidation,
    getUserByIdValidation
}