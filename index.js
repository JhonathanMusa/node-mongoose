const express = require("express");
const app = express();
const bodyparser = require("body-parser");
const mongoose = require("mongoose");
const { Schema } = mongoose.Schema();

const PORT = 8080;
const url = "mongodb://localhost/moviesDB";

// mongoose connection
mongoose.Promise = global.Promise;
mongoose.connect(url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// bodyparser
app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json());

// Schema
const movieSchema = Schema({
  title: String,
  year: Number,
  genre: String,
});

const movie = mongoose.model("movie", movieSchema);

// app.use(require("./src/routes/index"));

app.get("/", (req, res) => {
  res.send("Welcome to index page");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
