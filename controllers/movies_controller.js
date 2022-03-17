const express = require("express");
const Movie = require("../models/movie");

const router = express.Router();

router.get("/:imdbId", (req, res) => {
  const imdbId = req.params.imdbId;
  Movie.findMovieByImdbId(imdbId).then((movies) => res.json(movies));
  //   const title = req.params.id;
  //   Movie.findSearchResults(title).then((movies) => res.json(movies));
});

router.post("/", (req, res) => {
  const title = req.body.Title;
  const actors = req.body.Actors;
  const poster = req.body.Poster;
  const description = req.body.Plot;
  const year = req.body.Year.slice(0, 4);
  const imdbId = req.body.imdbID;
  Movie.isExist(imdbId).then((res) => {
    if (res === 0) {
      Movie.create(title, actors, poster, description, year, imdbId);
    }
  });
  Movie.findSearchResults(title).then(() => res.json({}));
});

module.exports = router;
