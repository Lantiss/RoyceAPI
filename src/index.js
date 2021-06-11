require("dotenv").config();
const express = require("express");
const { config } = require("./config");
const sequelize = require("./db");

const app = express();

app.use(express.json());
// app.use("/api/v1/", router);

app.listen(config.port, config.host, async () => {
  try {
    await sequelize.authenticate();
    console.info(`Server running at: https://${config.host}:${config.port}`);
  } catch (error) {
    console.error(error);
  }
});
