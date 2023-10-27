'use strict';

// delete one project by _id
const deleteProjectById = async (req, res) =>  {
    try {
         // get the id number from the request parameters
        const { _id } = req.params;
 
        // delete one project by id (database doesn't exist so nothing is deleted)
        const oneProjectDeleted = _id; 

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