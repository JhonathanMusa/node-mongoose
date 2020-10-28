const mongoose = require("mongoose");
const { movieSchema } = require("../models/movieModels");

const movie = mongoose.model("movie", movieSchema);

Movie.find({}, (err, Movie) => {
  if (err) {
    res.send(err);
  }
  res.json(Movie);
});

module.exports = {
  getMovies,
};
