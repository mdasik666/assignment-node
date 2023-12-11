module.exports = (sequelize, DataTypes) => {
    const Employee = sequelize.define('employee',{
        firstname:{
            type:DataTypes.STRING,
            allowNull:false,   
            required:true         
        },
        lastname:{
            type:DataTypes.STRING,
            allowNull:true                   
        },
        email:{
            type: DataTypes.STRING,
            required:true,
            unique:true                                  
        },
        gender:{
            type: DataTypes.STRING,
            required:true
        },
        age:{
            type: DataTypes.INTEGER,
            required:true
        },
        city:{
            type:DataTypes.TEXT
        }
    })
    return Employee
}