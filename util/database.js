const Sequelize = require("sequelize");

const sequelize = new Sequelize("movies-lib", "root", "yourPassword", {
  dialect: "mysql",
  host: "localhost",
});

module.exports = sequelize;
