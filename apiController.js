const User = require("./modules/user.js");
const Movie = require("./modules/movie.js");
const MoiveRented = require("./modules/movie-rented.js");

exports.getAllMoives = async (req, res, next) => {
  const allMoive = await Movie.findAll();
  res.json([{ message: "all data in the table", allMoives: allMoive }]);
};

exports.getOneMoive = async (req, res, next) => {
  const pramId = req.params.id;
  const movie = await Movie.findAll({
    where: {
      id: pramId,
    },
  });
  res.json(movie);
};

exports.addNewmoive = async (req, res, next) => {
  const moiveAdeed = await Movie.create({
    title: req.body.title,
    genre: req.body.genre,
    year: req.body.year,
    price: req.body.price,
  });
  res.status(201).json([{ message: "moive is addes", allMoives: moiveAdeed }]);
};

exports.updateAMoive = async (req, res, next) => {
  const pramId = req.params.id;
  const updatededMiove = await Movie.update(
    {
      title: req.body.title,
      genre: req.body.genre,
      year: req.body.year,
      price: req.body.price,
    },
    {
      where: {
        id: pramId,
      },
    }
  );

  res.json([{ message: "one moive is update", updateMoive: updatededMiove }]);
};

exports.deleteAMoive = async (req, res, next) => {
  const pramId = req.params.id;
  const moiveDeleted = await Movie.destroy({
    where: {
      id: pramId,
    },
  });
  res.json([{ message: "data is deleted", allMovie: moiveDeleted }]);
};

exports.newUser = async (req, res, next) => {
  const user = await User.create({
    name: req.body.name,
  });
  res.json([{ message: "new user added", userc: user }]);
};

exports.moiveRent = async (req, res, next) => {
  const pramId = req.params.moiveId;
  const user = req.user;
  const rentedMoive = await MoiveRented.create({
    userId: user.id,
    moiveNameId: pramId,
    period: req.body.period,
  });

  await user.update({
    rentStatus: "Active",
  });

  if (rentedMoive.period === "week") {
    setTimeout(async () => {
      await user.update({
        rentStatus: "complete",
      });
    }, 60000);
  } else {
    setTimeout(async () => {
      await user.update({
        rentStatus: "complete",
      });
    }, 5000);
  }

  console.log(req.user);
  res.json([{ message: "moive rented successfuly", moiveRent: rentedMoive }]);
};
