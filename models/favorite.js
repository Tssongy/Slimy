// const db = require("../db/db");

// const Favorite = {
//     isFavorited: (userId, imdbID) => {
//         const sql = `SELECT * FROM favorites WHERE user_id = $1 AND imdbID = $2`
//         return db
//                 .query(sql, [userId, imdbID])
//                 .then((dbRes) => dbRes.rows.length)
//     },
//     create: (userId, imdbID) => {
//         const sql = `INSERT INTO favorites(user_id,imdbID) VALUES ($1, $2, $3)`
        
//         return db  
//                 .query(sql, [userId, imdbID])
//     }
// }

// module.exports = Favorite