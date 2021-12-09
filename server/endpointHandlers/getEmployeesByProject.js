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

// get all employees working on a particular project
const getEmployeesByProject = async (req, res) =>  {
    try {
        // get the project id from the request parameters
        const { _id } = req.params;

        // create a new client
        const client = new MongoClient(MONGO_URI, options);

        // connect to the client
        await client.connect();

        // connect to the database
        const db = client.db("goodmorning");
        console.log("CONNECTED");  
        
        const queryString = "projects." + _id;

        // find all employees who are working on the project
        const employeesOnTheProject = await db.collection("employees").find({[queryString]:{$exists:true}}).toArray(); 

        //close the collection
        client.close();
        console.log("DISCONNECTED");

        // return the json object and status
        return (

            // SUCCESS return
            res.status(200).json({
                status: 200,
                data: employeesOnTheProject,
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