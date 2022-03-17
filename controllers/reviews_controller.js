const express = require("express");
const Reviews = require("../models/reviews");

const router = express.Router();

router.get("/:movieId", (req, res) => {
  const movieId = req.params.movieId;
  console.log(movieId);
  Reviews.findMovieReviews(movieId).then((comments) => res.json(comments));
});

router.post("/", (req, res) => {
  const { comment, movieId, userId } = req.body;

  if(!!userId){
    Reviews.create(userId, movieId, comment).then(() =>
    res.json({ message: "success" })
    );
    //   const review =
    //   Reviews.create(user_id, movieId, Rating, Review);
  }
  else {
    res.status(401).json({ message: "Please sign in to leave a review"})
  }
});

module.exports = router;
