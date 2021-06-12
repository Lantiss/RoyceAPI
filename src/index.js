require("dotenv").config();
const express = require("express");
const { config } = require("./config");
const sequelize = require("./db");
const { router } = require("./components/router/router");
const { errorMiddleware } = require("./middleware/errorMiddleware");

const app = express();

app.use(express.json());
app.use("/api/v1/", router);
app.use(errorMiddleware);

app.listen(config.port, config.host, async () => {
  try {
    await sequelize.authenticate();
    await sequelize.sync();
    console.info(`Server running at: http://${config.host}:${config.port}`);
  } catch (error) {
    console.error(error);
  }
});
