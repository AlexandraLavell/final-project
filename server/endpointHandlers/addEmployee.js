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

// get all items from the database
const addEmployee = async (req, res) =>  {

    try {
         // get the id number from params
        const { _id,
                firstName,
                lastName,
                email, 
                phone,
                projects } = req.body;


        // create a new client
        const client = new MongoClient(MONGO_URI, options);

        // connect to the client
        await client.connect();

        // connect to the database
        const db = client.db("goodmorning");
        console.log("CONNECTED");

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
            projects: updatedProjects};

        // insert one new employee
        const employeeAdded = await db.collection("employees")
                                        .insertOne(newEmployee); 


        //close the collection
        client.close();
        console.log("DISCONNECTED");

        // return the json object and status
        return (

            // SUCCESS return
            res.status(200).json({
                status: 200,
                data: employeeAdded,
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
module.exports = { addEmployee };