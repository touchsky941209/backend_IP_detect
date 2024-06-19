module.exports = () => {
    const { Client } = require("pg");
    const { user, host, database, password, port } = require("../config/dbconfig");

    const client = new Client({
        user,
        host,
        database,
        password,
        port,
    });

    client.connect()
        .then(() => {
            console.log("Postgresql is connected!")
        });

}