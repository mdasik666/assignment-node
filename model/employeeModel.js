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
            allowNull:false,       
            required:true,
            unique:true                                  
        },
        gender:{
            type: DataTypes.STRING,
            allowNull:false,       
            required:true
        },
        age:{
            type: DataTypes.INTEGER,
            allowNull:false,
            required:true
        },
        city:{
            type:DataTypes.TEXT,
            allowNull:true
        },
        salary:{
            type:DataTypes.NUMBER,
            allowNull:true
        }
    })
    return Employee
}