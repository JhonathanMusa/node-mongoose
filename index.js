const express = require("express");
const mongoose = require("mongoose");
const { MONGOURI } = require("./keys");
const app = express();
const PORT = 8080;

// connection to mongo
mongoose.connect(MONGOURI, { useUnifiedTopology: true, useNewUrlParser: true });

mongoose.connection.on("connected", (err) => {
  if (err) {
    resizeBy.json(err);
  }
  console.log("Connected to MongoDB");
});

// Models import
require("./models/movie")


app.use(express.json());

app.use(require("./routes/movie"))

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
