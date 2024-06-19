const router = require("express").Router()
const test = require("./test")

router.post("/test", test.sayHello )
router.post("/postgres", test.testDb)
router.post("/createTable", test.createTable)
router.post("/setData", test.setData)
router.post("/getData", test.getData)
router.post("/getSpeData", test.getSpeData)

module.exports = router