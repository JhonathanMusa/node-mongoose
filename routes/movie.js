import express from "express";
const router = express.Router();
import mongoose from "mongoose";
// const Genre = mongoose.model("Genre");

import Movie from "../models/movie"

router.get("/movies", async (req, res) => {
  try {
    const moviesDB = await Movie.find()
    res.json(moviesDB);
  } catch (error) {
    return res.status(400)
      .json({
        mensaje: "Ocurrio un error", error
      })
  }
});

router.post("/new-movie", async (req, res) => {
  const body = req.body;

  try {
    const moviesDB = await Movie.create(body)
    res.status(200).json(moviesDB)

  } catch (error) {
    return res.status(500).json({
      mensaje: "Ocurrio un error", error
    })
  }
});

module.exports = router;
