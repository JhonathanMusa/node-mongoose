import mongoose from "mongoose";
// const { ObjectId } = mongoose.Schema.Types;

const movie = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  year: {
    type: Number,
    required: true,
  },
  /*  genre: {
     type: ObjectId,
     ref: "Genre",
   }, */
});

mongoose.model("Movie", movie);
