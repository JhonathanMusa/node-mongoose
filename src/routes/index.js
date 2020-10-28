const { getMovies } = require("../controllers/index.controller");
const routes = (app) => {
  app.route("/movies").get(getMovies);
};

module.exports = routes;