const { createUserValidation } = require("./validations/createUserValidation");
const { getUserByIdValidation } = require("./validations/getUserByIdValidation");
const { deleteUserValidation } = require("./validations/deleteUserValidation");
const { listUserValidation } = require("./validations/listUserValidation");
const { updateUserValidation } = require("./validations/updateUserValidation");

module.exports = {
    createUserValidation,
    getUserByIdValidation,
    deleteUserValidation,
    listUserValidation,
    updateUserValidation,
}