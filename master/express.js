module.exports = () => {
    const express = require("express")
    const cors = require("cors")
    const morgan = require("morgan")
    const db_index = require("../routers/index_router")
    const app = express()

    morgan.token('ip', (req) => {
        console.log("Ip adress =>>>>>", req.socket.remoteAddress)
        return req.headers['x-forwarded-for'] || req.socket.remoteAddress;
    });

    app.use(morgan(':ip - :method :url :status :res[content-length] - :response-time ms'));

    app.use(cors())
    app.use(express.json())
    app.use("/api", db_index)

    return app
}