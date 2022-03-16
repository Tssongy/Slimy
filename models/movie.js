const db = require("../db/db");

const Movie = {
  findSearchResults: (title) => {
    const queryTitle = "%" + title + "%";
    const sql = `SELECT * FROM movies WHERE title LIKE $1`;

    return db.query(sql, [queryTitle]).then((dbRes) => dbRes.rows);
    // other columns of the movies can be accessed via dbRes.rows; e.g dbRes.rows -> to array -> array.
  },
  findMovieRating: (movie_id) => {
    const sql = `SELECT rating FROM reviews WHERE movie_id = $1`;

    return db.query(sql, [movie_id]);
  },

  create: (title, actors, poster, description) => {
    const sql = `INSERT INTO movies (title, actors, poster, description) VALUES ($1, $2, $3, $4)`;

    return db
      .query(sql, [title, actors, poster, description])
      .then((dbRes) => dbRes.rows[0]);
  },

  isSearched: (keyword) => {
    const sql = `SELECT * FROM searchs WHERE keyword = $1`;
    const result = db.query(sql, [keyword]).then((dbRes) => dbRes.rows[0]);
    if (result) {
      return true;
    } else {
      return false;
    }
  },
};

module.exports = Movie;
