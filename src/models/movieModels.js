const mongoose = require("mongoose");
const { Schema } = mongoose;

const movieSchema = new Schema({
  title: {
    type: String,
  },
  year: {
    type: Number,
  },
  genre: {
    type: String,
  },
});

module.exports = movieSchema;