import mongoose from "mongoose";

const genre = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
});

mongoose.model("Genre", genre);
