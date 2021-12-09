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
const addProject = async (req, res) =>  {
    try {
         // get project details from the body
        const { _id,
                approval = "",
                description = "",
                requested_budget = "",
                actual_budget = "",
                status = "",
                final_report = "" } = req.body;

        // create a new client
        const client = new MongoClient(MONGO_URI, options);

        // connect to the client
        await client.connect();

        // connect to the database
        const db = client.db("goodmorning");
        console.log("CONNECTED");

        const newProject = {    _id,
                                approval,
                                description,
                                requested_budget,
                                actual_budget,
                                status,
                                final_report };

        // add a project
        const projectAdded = await db.collection("projects").insertOne(newProject);


        // close the collection
        client.close();
        console.log("DISCONNECTED");

        // return the json object and status
        return (

            // SUCCESS return
            res.status(200).json({
                status: 200,
                data: projectAdded,
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
module.exports = { addProject };