'use strict';

const projects = require("../data").projects;


// get one project by _id
const getProjectById = async (req, res) =>  {
    try {
         // get the id from the request parameters
        const { _id } = req.params;

        // find the project
        const projectFound = projects.find((project)=> project._id === _id); 

        // return the json object and status
        return (

            // SUCCESS return
            res.status(200).json({
                status: 200,
                data: projectFound,
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
module.exports = { getProjectById };