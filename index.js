import express from "express";
import mongoose from "mongoose";
import { MONGOURI } from "./keys";
import cors from "cors";
import morgan from "morgan"
import path from "path"


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
// require("./models/genre");

// app.use(express.urlencoded({ extended: false }));
app.get("/", (req, res) => {
  res.send("Welcome to the application, go at /movies");
});

app.use(morgan("tiny"))
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }))


const history = require("connect-history-api-fallback");
app.use(history());


app.use(express.static(path.join(__dirname, "public")));

app.use(require("./routes/movie"));
// app.use(require("./routes/genre"));

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

