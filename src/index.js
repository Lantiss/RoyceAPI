require("dotenv").config();
const express = require("express");
const { config } = require("./config");
const sequelize = require("./db");
const { router } = require("./components/router/router");
const helmet = require("helmet");
const { errorMiddleware } = require("./middleware/errorMiddleware");

const app = express();

app.use(helmet());
app.use(express.json());
app.use("/api/v1/", router);
app.use(errorMiddleware);

app.listen(config.port, config.host, async () => {
  try {
    let retries = 7;
    while (retries) {
      try {
        await sequelize.authenticate();
        await sequelize.sync();
        break;
      } catch (err) {
        retries -= 1;
        console.log(`retries left: ${retries}`);
        // wait 5 seconds
        await new Promise((res) => setTimeout(res, 9000));
      }
    }
    console.info(`Server running at: http://${config.host}:${config.port}`);
  } catch (error) {
    console.error(error);
  }
});
