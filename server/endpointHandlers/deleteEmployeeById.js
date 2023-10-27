'use strict';

// delete one employee by _id
const deleteEmployeeById = async (req, res) =>  {
    try {
         // get the employee id number from the request parameters
        const { _id } = req.params;

        // delete employee (database doesn't exist so nothing is deleted)
        const oneEmployeeDeleted = _id; 

        // return the json object and status
        return (

            // SUCCESS return
            res.status(200).json({
                status: 200,
                data: oneEmployeeDeleted,
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
module.exports = { deleteEmployeeById };