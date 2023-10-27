'use strict';

//require data file
const employees = require("../data").employees;


// get an employee by id
const modifyEmployee = async (req, res) =>  {
    try {
        // get the employee id from the request parameters
        const { _id } = req.params;
        
        // get updated info from request body
        const {
                    firstName,
                    lastName,
                    email, 
                    phone,
                    projects,
                } = req.body;

        // find the employee
        const employeeFound = employees.find((emp)=> emp._id === _id); 
        
        // check for updated information
        const newFirstName = (!!firstName && (employeeFound.firstName !== firstName)) ? firstName : employeeFound.firstName;
        const newLastName = (!!lastName && (employeeFound.lastName !== lastName)) ? lastName : employeeFound.lastName;
        const newEmail = (!!email && (employeeFound.email !== email)) ? email : employeeFound.email;
        const newPhone = (!!phone && (employeeFound.phone !== phone)) ? phone : employeeFound.phone;

        const newProjects = employeeFound.projects;        

        // add the new projects
        if (Array.isArray(projects)){            
            projects.forEach((prj) => {
                const randomDate = () => { return (new Date(Date.now() + Math.round(Math.random()*31556952000))).toString()}
                if(!Object.keys(employeeFound.projects).includes(prj)){
                newProjects[prj] = [randomDate()];
                }
            });
        } else {
            Object.keys(projects).forEach((prj) => {
                const randomDate = () => { return (new Date(Date.now() + Math.round(Math.random()*31556952000))).toString}
                if(!Object.keys(employeeFound.projects).includes(prj)){
                newProjects[prj] = [randomDate()];
                }
            });
        } 

        // update all employee info
        const updatedEmployeeInfo = {
                                    "_id": _id,
                                    "firstName": newFirstName,
                                    "lastName" : newLastName,
                                    "email" : newEmail,
                                    "phone" : newPhone,
                                    "projects": newProjects
                                    };


        // return the json object and status
        return (

            // SUCCESS return
            res.status(200).json({
                status: 200,
                data: updatedEmployeeInfo,
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
module.exports = { modifyEmployee };