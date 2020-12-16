import mongoose from "mongoose";
// const { ObjectId } = mongoose.Schema.Types;
const Schema = mongoose.Schema

const movieSchema = new Schema({
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

const Movie = mongoose.model("Movie", movieSchema)

export default Movie
