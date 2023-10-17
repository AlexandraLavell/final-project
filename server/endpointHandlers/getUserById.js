'use strict';

const users = require("../data").users;


// get an user by id
const getUserById = async (req, res) =>  {
    try {
        // get the user id from the request parameters
        const { _id="" } = req.params;

        const { password="" } = req.body;

    
        // find the user
        const userFound = users.find((user) => user._id === _id); 
        
        // if the password sent equals the password found send back true otherwise false
        const returnPermission = (userFound.password === password);        


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