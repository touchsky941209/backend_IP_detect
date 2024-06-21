const config = require("./config/config")
const express = require("./master/express")
const postgreSql = require("./master/postgres")

const app = express()
const db = postgreSql()

app.listen(config.port, () => {
    console.log(`Server is running  on ${config.port}`)
})