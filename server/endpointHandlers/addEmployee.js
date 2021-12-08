'use strict';

//require Mongodb
const { MongoClient } = require("mongodb");

//get URI
require("dotenv").config({path:"./.env"});
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
                projects, } = req.query;

        // create a new client
        const client = new MongoClient(MONGO_URI, options);

        // connect to the client
        await client.connect();

        // connect to the database
        const db = client.db("goodmorning");
        console.log("CONNECTED");

        // create a new employee object
        const newEmployee = { _id,
            firstName,
            lastName,
            email, 
            phone,
            projects, }


        // insert one new employee
        const oneNewEmployee = await db.collection("employees")
                                        .insertOne({newEmployee}); 


        //close the collection
        client.close();
        console.log("DISCONNECTED");

        // return the json object and status
        return (

            // SUCCESS return
            res.status(200).json({
                status: 200,
                data: oneNewEmployee,
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