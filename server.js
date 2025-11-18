const express = require("express");
const bodyParser = require("body-parser");

const allRoutes = require("./apiRoutes.js");
const sequelize = require("./util/database.js");

const User = require("./modules/user.js");
const Moive = require("./modules/movie.js");
const MoiveRented = require("./modules/movie-rented.js");

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());

// a middelware for user
app.use((req, res, next) => {
  User.findByPk(1)
    .then((user) => {
      req.user = user;
      next();
    })
    .catch((err) => console.error(err));
});

app.use(allRoutes);

// connect user to moive
User.belongsToMany(Moive, { through: MoiveRented });
Moive.belongsToMany(User, { through: MoiveRented });

sequelize
  .sync()
  .then(app.listen(8000))
  .catch((err) => console.log(err));
