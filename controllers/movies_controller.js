const express = require("express");
const Movie = require("../models/movie");

const router = express.Router();

router.get("/:title", (req, res) => {
  const title = req.params.title;
  console.log("hello");
  Movie.findSearchResults(title).then((movies) => res.json(movies));
  //   const title = req.params.id;
  //   Movie.findSearchResults(title).then((movies) => res.json(movies));
});

router.post("/", (req, res) => {
  const title = req.body.Title;
  const poster = req.body.Poster;
  const actors = req.body.Actors;
  const description = req.body.Plot;

  Movie.create(title, actors, poster, description);
});

module.exports = router;
