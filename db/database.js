const {Sequelize, DataTypes} = require("sequelize")
const dbconfig = require("../config/dbconfig")

const sequelize = new Sequelize(dbconfig.DB,dbconfig.USER,dbconfig.PASSWORD,{
    host:dbconfig.HOST,
    dialect:dbconfig.dialect,
    pool:{
        max:dbconfig.pool.max,
        min:dbconfig.pool.min,
    }    
})

sequelize.authenticate().then(()=>{
    console.log("Database connected")
}).catch((err)=>{
    console.log(err)
})

const db = {}
db.sequelize = sequelize
db.Sequelize = Sequelize

db.employee = require("../model/employeeModel")(sequelize,DataTypes)

db.sequelize.sync({force:false}).then(()=>{
    console.log("re-sync success")
})

module.exports = db