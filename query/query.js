module.exports = {
    createTable: "CREATE TABLE IF NOT EXISTS albums ( id SERIAL PRIMARY KEY, title VARCHAR(255) NOT NULL, artist VARCHAR(255) NOT NULL,price NUMERIC(10, 2));",
    setData: "INSERT INTO albums (title, artist, price) VALUES ($1, $2, $3) RETURNING id;",
    getData: "SELECT * FROM albums;",
    getSpecialData: "SELECT * FROM albums WHERE id = $1;"
}
