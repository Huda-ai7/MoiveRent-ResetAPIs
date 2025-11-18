const Sequelize = require("sequelize");

const sequelize = new Sequelize("movies-lib", "root", "Hh123456", {
  dialect: "mysql",
  host: "localhost",
});

module.exports = sequelize;
