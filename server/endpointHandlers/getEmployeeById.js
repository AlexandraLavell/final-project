'use strict';

//require data file
const employees = require("../data").employees;

// get an employee by id
const getEmployeeById = async (req, res) =>  {
    try {
        // get the employee id from the request parameters
        const { _id } = req.params;

        // find the employee
        const employeeFound = employees.find((employee) => employee._id === _id);

        // return the json object and status
        return (

            // SUCCESS return
            res.status(200).json({
                status: 200,
                data: employeeFound,
            })
        ) 
    } catch (err) {

        // ERROR return
        res.status(400).json({
            status: 400,
            message: err.message,
        })
    }
}

// export handler function
module.exports = { getEmployeeById };