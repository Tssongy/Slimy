const express = require("express");
const Reviews = require("../models/reviews");

const router = express.Router();

router.get("/:movieId", (req, res) => {
  const movieId = req.params.movieId;
  console.log(movieId);
  Reviews.findMovieReviews(movieId).then((comments) => res.json(comments));
});

// router.post("/:id/:movieId", (req, res) => {
//   const user_id = req.params.id;
//   const movie_id = req.params.movieId;
//   const rating = req.body.Rating;
//   const review = req.body.Review;

//   Reviews.create(user_id, movieId, Rating, Review);
// });
module.exports = router;
