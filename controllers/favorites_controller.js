const express = require("express");
const Favorite = require("../models/favorite");

const router = express.Router();

router.get("/:userId/:imdbId", (req, res) => {
    const userId = req.params.userId
    const imdbId = req.params.imdbId
    Favorite.isFavorited(userId, imdbId).then(length => res.json(length))
})

router.post("/", (req, res) => {
    const {userId, imdbId} = req.body
    Favorite
        .create(userId, imdbId)
        .then(() => res.json({message: "successfully favorited"}))
})

module.exports = router