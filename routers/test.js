const pool = require("../query/index_query")
const query = require("../query/query")

exports.sayHello = async (req, res) => {
    res.send({
        message: "Hello"
    })
}

exports.testDb = async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM users')
        res.json({
            res: result
        })
    } catch (err) {
        res.json({
            error: err
        })
    }
}

exports.createTable = async (req, res) => {
    try {
        const createTable = await pool.query(query.createTable)
        res.json({
            message: "Table is created"
        })
    } catch (err) {
        res.send("Error => " + err)
    }
}

exports.setData = async (req, res) => {
    try {
        await pool.query(query.setData, ["Artist", "Hey", 6])
        res.json({
            message: "Data is entered!"
        })
    } catch (err) {
        console.log("Error => ", err)
        res.json({
            message: "Error => " + err
        })
    }
}

exports.getData = async (req, res) => {
    try {
        const result = await pool.query(query.getData)
        res.json(result.rows)

    } catch (err) {
        console.log("Error =>", err)
        res.json({
            message: "Error => " + err
        })
    }
}

exports.getSpeData = async (req, res) => {
    try {
        const result = await pool.query(query.getSpecialData, [2])
        res.json({
            result: result.rows
        })
    } catch (err) {
        console.log("Error => ", err)
        res.json({
            message: "Error => " + err
        })
    }
}