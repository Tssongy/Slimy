const db = require('../db/db')

const Movie = {
    findSearchResults: (searchInput) => {
        const sql = `SELECT * FROM movies WHERE title LIKE '$1%'`

        return db
                .query(sql, [searchInput])
                // other columns of the movies can be accessed via dbRes.rows; e.g dbRes.rows -> to array -> array.
                .then(dbRes => dbRes.rows)
    }

}