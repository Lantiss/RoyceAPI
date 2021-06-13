const { createUser } = require("./controllers/createUser");
const { getUserById } = require("./controllers/getUserById");
const { deleteUser } = require("./controllers/deleteUser");
const { listUser } = require("./controllers/listUser");
const { updateUser } = require("./controllers/updateUser");

module.exports = {
    createUser,
    getUserById,
    deleteUser,
    listUser,
    updateUser,
}