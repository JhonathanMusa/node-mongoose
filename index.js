import express from "express";
import mongoose from "mongoose";
import { MONGOURI } from "./keys";
import cors from "cors";
const app = express();
const PORT = process.env.PORT || 3000;

// connection to mongo
mongoose.connect(MONGOURI, { useUnifiedTopology: true, useNewUrlParser: true });

mongoose.connection.on("connected", (err) => {
  if (err) {
    resizeBy.json(err);
  }
  console.log("Connected to MongoDB");
});

// Models import
require("./models/movie");
require("./models/genre");

app.use(express.json());
app.use(cors());
app.get("/", (req, res) => {
  res.send("Welcome to the application, go at /movies");
});

app.use(require("./routes/movie"));
app.use(require("./routes/genre"));

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
