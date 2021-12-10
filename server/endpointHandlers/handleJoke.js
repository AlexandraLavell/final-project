'use strict';

// require the 'request-promise' module.
const request = require("request-promise");

//get URI
require("dotenv").config({path:"../.env"});
const { OPENCAGE_API_KEY } = process.env;

const options = {
    uri: 'https://icanhazdadjoke.com/ ',
    headers:{ 
        "Accept": "application/json"
        }
    }

// get one project by _id
const handleJoke = async (req, res) =>  {
    try {  
        // return the json object and status
        const theJoke =  await request(options);

        return  (

        // SUCCESS return
        res.status(200).json({
            status: 200,
            data: JSON.parse(theJoke).joke,
        }))
    } catch (err) {
        // ERROR return
        res.status(400).json({
            status: 400,
            message: err.message,
        })
    }
}

// export handler function
module.exports = { handleJoke };