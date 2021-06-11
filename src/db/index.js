const { Sequelize } = require("sequelize");

const sequelize = new Sequelize({
  host: process.env.BD_HOST, //"localhost",
  dialect: "postgres",
  database: process.env.POSTGRES_DB,
  username: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  port: process.env.DB_PORT,
  logQueryParameters: true,
  benchmark: true,
});

const modelDefiners = [require("./models/user.model")];

// We define all models according to their files.
for (const modelDefiner of modelDefiners) {
  modelDefiner(sequelize);
}

// Export the sequelize connection instance to be used around our app.
module.exports = sequelize;
