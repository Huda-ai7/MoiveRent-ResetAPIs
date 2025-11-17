const Sequelize = require("sequelize");

const sequelize = require("../util/database.js");

const MoiveRented = sequelize.define("moiveRented", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  period: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

module.exports = MoiveRented;
