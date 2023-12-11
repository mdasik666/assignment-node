const express = require("express")
const app = express()
const cors = require("cors")
require("dotenv").config()

app.use(express.urlencoded({extended:false}))
app.use(express.json())
app.use(cors({
    origin:"http://localhost:3000"
}))

const crudController = require("./route/employeeRoute")

app.use("/api/employee",crudController)

const port = process.env.PORT
app.listen(port, ()=>{
    console.log(`Server is running on port ${port}.`)
})