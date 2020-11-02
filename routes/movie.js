const { Router } = require("express");
const router = Router();
const mongoose = require("mongoose");
const Movie = mongoose.model("Movie");

router.get("/movies", (req, res) => {
  Movie.find()
    .then((movies) => {
      res.json({ movies });
    })
    .catch((err) => {
      console.log(err);
    });
});


module.exports = router;