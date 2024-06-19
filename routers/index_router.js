const router = require("express").Router()
const test = require("./test")
router.post("/test", test.sayHello )
router.post("/postgres", test.testDb)
router.post("/createTable", test.createTable)
module.exports = router