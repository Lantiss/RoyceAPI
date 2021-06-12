const { createUserValidation } = require("./validations/createUserValidation");
const { getUserByIdValidation } = require("./validations/getUserByIdValidation");
const { deleteUserValidation } = require("./validations/deleteUserValidation");
const { listUserValidation } = require("./validations/listUserValidation");

module.exports = {
    createUserValidation,
    getUserByIdValidation,
    deleteUserValidation,
    listUserValidation
}