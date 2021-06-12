const { userRouter } = require("../../components/user/userRouter");

const express = require("express");
const router = express.Router();

userRouter(router);

module.exports = { router };