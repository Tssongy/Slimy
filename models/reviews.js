const db = require("../db/db");

const Reviews = {
  findMovieReviews: (movie_id) => {
    const sql = `SELECT review FROM Reviews WHERE movie_id = $1`;
    return db.query(sql, [movie_id]).then((dbRes) => dbRes.rows);
  },
  create: (user_id, movie_id, review) => {
    const sql = `
    INSERT INTO reviews (user_id, movie_id, rating, review) VALUES ($1, $2, $3, $4)`;

    return db
      .query(sql, [user_id, movie_id, 4.5, review])
      .then((dbRes) => dbRes.rows);
  },
};

module.exports = Reviews;
