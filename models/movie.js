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
  findMovieByImdbId: (imdbId) => {
    const sql = `SELECT * FROM movies WHERE imdbid = $1`;

    return db.query(sql, [imdbId]).then((dbRes) => dbRes.rows[0]);
  },

  findMoviesById: (id) => {
    const idsInPar = "(" + id + ")";
    console.log(idsInPar);
    const sql = `SELECT * FROM movies WHERE id IN ${idsInPar}`;

    return db.query(sql).then((dbRes) => dbRes.rows);
  },

  findTopRatingMovies: () => {
    const sql = `SELECT movie_id, AVG(rating) AS avg_rating FROM reviews GROUP BY movie_id ORDER BY avg_rating DESC LIMIT 10`;
    return db.query(sql).then((dbRes) => dbRes.rows);
  },

  create: (title, actors, poster, description, year, imdbid) => {
    const sql = `INSERT INTO movies (title, actors, poster, description, year, imdbid) VALUES ($1, $2, $3, $4, $5, $6)`;

    return db
      .query(sql, [title, actors, poster, description, year, imdbid])
      .then((dbRes) => dbRes.rows);
  },

  isExist: (imdbId) => {
    const sql = `SELECT * FROM movies WHERE imdbid = $1`;
    return db.query(sql, [imdbId]).then((dbRes) => dbRes.rows.length);
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
