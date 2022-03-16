const pg = require('pg')

const db = new pg.Pool({
    database: 'slimy_db'
})

module.exports = db