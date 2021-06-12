const { createUser } = require("./controllers/createUser");
const { getUserById } = require("./controllers/getUserById");
const { deleteUser } = require("./controllers/deleteUser");
const { listUser } = require("./controllers/listUser");

module.exports = {
    createUser,
    getUserById,
    deleteUser,
    listUser,
}