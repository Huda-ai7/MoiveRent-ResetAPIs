const Sequelize = require("sequelize");

const sequelize = new Sequelize("movies-lib", "root", "your own password", {
  dialect: "mysql",
  host: "localhost",
});

module.exports = sequelize;
