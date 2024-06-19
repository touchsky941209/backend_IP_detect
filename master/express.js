module.exports = () => {
    const express = require("express")
    const cors = require("cors")
    const db_index = require("../routers/index_router")
    const app = express()
    app.use(cors())
    app.use(express.json())

    app.use("/api", db_index)

    return app
}