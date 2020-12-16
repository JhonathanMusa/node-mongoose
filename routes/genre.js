/* import { Router } from "express";
const router = Router();
import mongoose from "mongoose";
const Genre = mongoose.model("Genre");

router.get("/genres", (req, res) => {
  Genre.find()
    .then((genres) => {
      res.json({ genres });
    })
    .catch((err) => {
      console.log(err);
    });
});

router.post("/new-genre", (req, res) => {
  const { name } = req.body;

  if (!name) {
    res.json({ err: "All fields are required" });
  }

  const genre = new Genre({
    name,
  });

  genre
    .save()
    .then(() => {
      res.json({ msg: "Genre Created" });
    })
    .catch((err) => {
      console.log(err);
    });
});

module.exports = router;
 */