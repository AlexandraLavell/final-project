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

// delete one project by _id
const deleteProjectById = async (req, res) =>  {
    try {
         // get the id number from the request parameters
        const { _id } = req.params;

        // create a new client
        const client = new MongoClient(MONGO_URI, options);

        // connect to the client
        await client.connect();

        // connect to the database
        const db = client.db("goodmorning");
        console.log("CONNECTED");

        // delete one project by id
        const oneProjectDeleted = await db.collection("projects")
                                        .deleteOne({_id}); 

        //close the collection
        client.close();
        console.log("DISCONNECTED");

        // return the json object and status
        return (

            // SUCCESS return
            res.status(200).json({
                status: 200,
                data: oneProjectDeleted,
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
module.exports = { deleteProjectById };