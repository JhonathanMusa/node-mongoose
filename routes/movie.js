import express from "express";
const router = express.Router();


import Movie from "../models/movie"

// Get all movies
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

// insert new movie
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

// Get movie by Id
router.get("/movie/:id", async (req, res) => {
  const _id = req.params.id
  try {
    const moviesDB = await Movie.findById({ _id })
    res.status(200).json(moviesDB)
  } catch (error) {
    return res.status(400).json({
      mensaje: "Ocurrio un error", error
    })
  }
})

router.put("/movie/:id", async (req, res) => {
  const _id = req.params.id
  const body = req.body
  try {
    const movieDB = await Movie.findByIdAndUpdate(_id, body, { new: true })
    res.json(movieDB)
  } catch (error) {
    return res.status(400).json({
      mensaje: "Ocurrio un error", error
    })
  }
})

// delete movie by id
router.delete("/movie/:id", async (req, res) => {
  const _id = req.params.id
  try {
    const movieDB = await Movie.findByIdAndDelete({ _id })
    if (!movieDB) {
      res.status(400).json({
        mensaje: "No se encontro el id", error
      })
    }
    res.json(movieDB)
  } catch (error) {
    return res.status(400).json({
      mensaje: "Ocurrio un error", error
    })
  }
})

module.exports = router;
