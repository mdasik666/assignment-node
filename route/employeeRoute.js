const router = require("express").Router()

const { addEmployee, getEmployee, deleteEmployee, updateEmployee } = require("../controller/employeeController")
router.post("/addemployee", addEmployee)
router.get("/fetchemployees", getEmployee)
router.put("/updateemployee", updateEmployee)
router.delete("/deleteemployee/:id", deleteEmployee)

module.exports = router