// const db = require("../db/db");


// const Reviews = {
//   findMovieReviews: (movie_id) => {
//     const sql = `SELECT review FROM Reviews WHERE movie_id = $1`
//     return db.query(sql, [movie_id]).then((dbRes) => dbRes.rows) 
//   }
//   create: (user_id, movie_id, rating, review) => {
//     const sql = `
//     INSERT INTO reviews (user_id, movie_id, rating, review)`

//     return db
//       .query(sql, [user_id, movie_id, rating, review])
//       .then((dbRes) => dbRes,rows[0])
//   }


// module.exports = Reviews