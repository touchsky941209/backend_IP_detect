const { Pool } = require('pg');
const { user, password, host, port, database } = require("../config/dbconfig")

const pool = new Pool({
    user,
    password,
    host,
    port, // default Postgres port
    database
});

module.exports = pool