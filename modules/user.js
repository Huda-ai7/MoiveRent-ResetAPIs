const Sequelize = require("sequelize");

const sequelize = require("../util/database.js");

const User = sequelize.define("user", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  rentStatus: {
    type: Sequelize.STRING,
    defaultValue: "New",
  },
});

module.exports = User;
