const { Sequelize } = require("sequelize");
const { DataTypes } = require("sequelize");
const sequelize = require("../index");
const moment = require("moment");

const User = sequelize.define("user", {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
  },
  name: {
    allowNull: false,
    type: DataTypes.STRING(20),
  },
  dob: {
    allowNull: false,
    type: DataTypes.DATE,
    get: function () {
      return moment(this.getDataValue('dob')).format('DD-MM-YYYY')
    },
  },
  address: {
    allowNull: false,
    type: DataTypes.STRING(50),
  },
  description: {
    allowNull: false,
    type: DataTypes.STRING(100),
  },
  createdAt: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: Sequelize.NOW,
  },
  updatedAt: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: Sequelize.NOW,
  },
});

module.exports = User;
