const db = require("../db/database")

const Employee = db.employee

const addEmployee = async (req, res) => {
    const employee = req.body
    try {
        const empInsert = await Employee.create(employee)
        if (!empInsert) {
            return res.send({
                status: "Failed",
                message: "Employee data addedd failed"
            })
        }
        res.send({
            status: "Success",
            message: "Employee Data Added Successfully"
        })
    } catch (error) {
        res.send({
            status: "Failed",
            message: "Internal Server Error"
        })
    }
}

const getEmployee = async (req, res) => {    
    try {
        const empData = await Employee.findAll({})
        if (!empData.length) {
            return res.send({
                status: "Failed",
                message: "Employee Not Found"
            })
        }
        res.send({
            status: "Success",
            message: "Employee Found",
            empData
        })
    } catch (error) {
        res.send({
            status: "Failed",
            message: "Internal Server Error"
        })
    }
}

const deleteEmployee = async (req, res) => {    
    const {id} = req.params
    try {
        const empData = await Employee.deleteOne(id)
        if (!empData) {
            return res.send({
                status: "Failed",
                message: "Employee Data Deleting Failed"
            })
        }
        res.send({
            status: "Success",
            message: "Employee Data Deleted Successfully",
            empData
        })
    } catch (error) {
        res.send({
            status: "Failed",
            message: "Internal Server Error"
        })
    }
}

module.exports = {
    addEmployee,
    getEmployee,
    deleteEmployee
}