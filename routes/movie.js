import { Router } from "express";
const router = Router();
import mongoose from "mongoose";
const Movie = mongoose.model("Movie");
const Genre = mongoose.model("Genre");


router.get("/movies", (req, res) => {
  Movie.find()
    .populate("genre", "_id name")
    .then((movies) => {
      res.json({ movies });
    })
    .catch((err) => {
      console.log(err);
    });
});

router.post("/new-movie", (req, res) => {
  const { title, description, year, genre } = req.body;

  if (!title || !year || !description || !genre) {
    res.json({ err: "All fields are required" });
  }

  Genre.findOne({ _id: genre.id })
    .then((gen) => {
      const movie = new Movie({
        title,
        year,
        description,
        genre: gen,
      });

      movie
        .save()
        .then(() => {
          res.json({ msg: "Movie Inserted" });
        })
        .catch((err) => {});
    })
    .catch((err) => {
      console.log(err);
    });

  /*   const movie = new Movie({
    title,
    description,
    year,
  });

  movie
    .save()
    .then(() => {
      res.json({ msg: "Movie Inserted" });
    })
    .catch((err) => {
      console.log(err);
    }); */
});

module.exports = router;
