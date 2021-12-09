'use strict';

//require Mongodb
const { MongoClient } = require("mongodb");

//get URI
require("dotenv").config({path:"../.env"});
const { MONGO_URI } = process.env;

const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}

// get an employee by id
const modifyEmployee = async (req, res) =>  {
    try {
        // get the employee id from the request parameters
        const { _id } = req.params;
        
        // get updated info from request body
        const {
                    firstName,
                    lastName,
                    email = "", 
                    phone = "",
                    // projects = {} 
                } = req.body;

        // create a new client
        const client = new MongoClient(MONGO_URI, options);

        // connect to the client
        await client.connect();

        // connect to the database
        const db = client.db("goodmorning");
        console.log("CONNECTED");   

        // find the employee
        const employeeFound = await db.collection("employees")
                                        .findOne({_id}); 
        
        // check for updated information
        const newFirstName = employeeFound.firstName !== firstName ? firstName : "";
        const newLastName = employeeFound.lastName !== lastName ? lastName : "";
        const newEmail = employeeFound.email !== email ? email : "";
        const newPhone = employeeFound.phone !== phone ? phone : "";

        // const currentProjects = Object.keys(employeeFound.projects);
        // const newProjects = Object.keys(projects);

        // newProjects = newProjects.filter((prj) => {
        //     return !currentProjects.includes(prj);
        // })

        // console.log(newProjects);

        // update all employee info except projects
        const filterEmployees = {_id};

        const updateEmployeeInfo = {$set: {
                                            "$.firstName": newFirstName,
                                            "$.lastName" : newLastName,
                                            "$.email" : newEmail,
                                            "$.phone" : newPhone
                                            }};

        

        // update
        const updatedEmployee = await db.collection("employees")
                                        .updateOne(filterEmployees, updateEmployeeInfo);  

        

        //close the collection
        client.close();
        console.log("DISCONNECTED");

        // return the json object and status
        return (

            // SUCCESS return
            res.status(200).json({
                status: 200,
                data: updatedEmployee,
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