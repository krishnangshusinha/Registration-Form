// Here we create the schema for tables in our Employee database

const mongoose = require('mongoose');

const EmployeeSchema = new mongoose.Schema({
    name:String,
    email: String,
    password: String
})

const EmployeeModel = mongoose.model("employees" , EmployeeSchema);     // "employees" here is name of the table and it follows the schema "EmployeeSchema"


module.exports = EmployeeModel