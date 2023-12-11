const router = require("express").Router()

const { addEmployee, getEmployee, deleteEmployee } = require("../controller/employeeController")
router.post("/addemployee", addEmployee)
router.get("/fetchemployees", getEmployee)
router.delete("/deleteemployee/:id", deleteEmployee)

module.exports = router