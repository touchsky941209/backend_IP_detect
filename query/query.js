module.exports = {
    createTable: "CREATE TABLE IF NOT EXISTS albums ( id SERIAL PRIMARY KEY, title VARCHAR(255) NOT NULL, artist VARCHAR(255) NOT NULL,price NUMERIC(10, 2));"
}
