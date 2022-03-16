const db = require("../db/db");

const Movie = {
  findSearchResults: (searchInput) => {
    const sql = `SELECT * FROM movies WHERE title LIKE '$1%'`;

    return (
      db
        .query(sql, [searchInput])
        // other columns of the movies can be accessed via dbRes.rows; e.g dbRes.rows -> to array -> array.
        .then((dbRes) => dbRes.rows)
    );
  },

  createMovie: (title, poster, actors = unknown, description = unknown) => {
    const sql = `INSERT INTO movies (title, actors, poster, description) VALUES ($1, $3, $2, $4)`;

    return db
      .query(sql, [title, poster, actors, description])
      .then((dbRes) => dbRes.rows[0]);
  },
};

module.exports = Movie;
