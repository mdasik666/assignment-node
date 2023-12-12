const db = require("../db/database")

const Employee = db.employee

const addEmployee = async (req, res) => {
    const employee = req.body
    try {
        const checkEmpAvail = await Employee.findAll({ where: { email: employee.email } })
        if (checkEmpAvail.length) {
            return res.send({
                status: "Failed",
                message: "Employee Already Found"
            })
        }
        const empInsert = await Employee.create(employee)
        if (!empInsert) {
            return res.send({
                status: "Failed",
                message: "Employee data addedd failed"
            })
        }
        res.send({
            status: "Success",
            message: "Employee Data Added Successfully",
            empData: await Employee.findAll({})
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

const updateEmployee = async (req, res) => {
    const empData = req.body
    try {
        const updateDate = await Employee.update(empData, { where: { id: empData.id } })
        if (!updateDate) {
            return res.send({
                status: "Failed",
                message: "Employee Data Updating Failed"
            })
        }
        res.send({
            status: "Success",
            message: "Employee Data Updated Successfully",
            empData: await Employee.findAll({})           
        })
    } catch (error) {
        res.send({
            status: "Failed",
            message: "Internal Server Error"
        })
    }
}

const deleteEmployee = async (req, res) => {
    const { id } = req.params
    try {
        const empData = await Employee.destroy({ where: { id: id } })
        if (!empData) {
            return res.send({
                status: "Failed",
                message: "Employee Data Deleting Failed"
            })
        }
        res.send({
            status: "Success",
            message: "Employee Data Deleted Successfully",
            empData: await Employee.findAll({})
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
    updateEmployee,
    deleteEmployee
}