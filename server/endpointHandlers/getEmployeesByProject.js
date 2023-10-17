'use strict';

const { employees, projects } = require("../data");

// get all employees working on a particular project
const getEmployeesByProject = async (req, res) =>  {
    try {
        // get the project id from the request parameters
        const { _id } = req.params;

        // find all employees who are working on the project
        const employeesOnTheProject = employees;
        
       


        let listOfEmployees = [];
        employeesOnTheProject.map((emp) => {
            listOfEmployees.push(emp._id);
        });

        // return the json object and status
        return (

            // SUCCESS return
            res.status(200).json({
                status: 200,
                data: listOfEmployees,
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
module.exports = { getEmployeesByProject };