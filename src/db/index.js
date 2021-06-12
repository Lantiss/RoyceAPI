const { Sequelize } = require("sequelize");

const sequelize = new Sequelize({
  host: process.env.BD_HOST, //"localhost",
  dialect: "postgres",
  database: process.env.POSTGRES_DB,
  username: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  port: process.env.DB_PORT,
  logQueryParameters: false,
  logging: false,
  benchmark: false,
});

module.exports = sequelize;
