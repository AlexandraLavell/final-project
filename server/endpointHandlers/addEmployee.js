'use strict';

//require data file
const employees = require("../data").employees;

// add an employee to the database
const addEmployee = async (req, res) =>  {

    try {
        // get the employee details from the request body
        const { _id,
                firstName = "",
                lastName = "",
                email = "", 
                phone = "",
                projects = {}
            } = req.body;



        // change the dates in the project object to ISO date objects
        
        // all the keys of the project object
        const allProjectKeys = Object.keys(projects);
        const updatedProjects = {};

        // map through the project object keys
        allProjectKeys.map((prjKey) => {
            const dateArray = [];
            // map through each object and transform the date to an ISO date object
            projects[prjKey].map((item) =>{
                dateArray.push(Date(item));
            }); 
            // add the formated date to an updated projects object
            updatedProjects[prjKey] = dateArray;
        })

        // create a new employee object
        const newEmployee = { _id,
            firstName,
            lastName,
            email, 
            phone,
            projects : updatedProjects};

        // insert one new employee
        const employeeAdded = employees.push(newEmployee);


        // return the json object and status
        return (

            // SUCCESS return
            res.status(200).json({
                status: 200,
                data: employeeAdded,
            })
        ) 
    } catch (err) {
        console.log(err);

        // ERROR return
        res.status(400).json({
            status: 400,
            message: err.message,
        })
    }
}

// export handler function
module.exports = { addEmployee };