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

// get an user by id
const getUserById = async (req, res) =>  {
    try {
        // get the user id from the request parameters
        const { _id="" } = req.params;

        const { password="" } = req.body;

        // create a new client
        const client = new MongoClient(MONGO_URI, options);

        // connect to the client
        await client.connect();

        // connect to the database
        const db = client.db("goodmorning");
        console.log("CONNECTED");   

        // find the user
        const userFound = await db.collection("users")
                                        .findOne({_id}); 
        
        // if the password sent equals the password found send back true otherwise false
        const returnPermission = (userFound.password === password);        

        //close the collection
        client.close();
        console.log("DISCONNECTED");

        // return the json object and status
        return (

            // SUCCESS return
            res.status(200).json({
                status: 200,
                data: returnPermission,
            })
        ) 
    } catch (err) {

        // ERROR return
        res.status(400).json({
            status: 400,
            message: err.message,
            data: false,
        })
    }
}

// export handler function
module.exports = { getUserById };