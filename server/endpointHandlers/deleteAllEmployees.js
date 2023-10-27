'use strict';

// delete all employees from the database FOR DEV PURPOSES
const deleteAllEmployees = async (req, res) =>  {
    try {

       //delete all employees YIKES (database doesn't exist so nothing is deleted)
        const allEmployeesDeleted = true;

        // return the json object and status
        return (

            // SUCCESS return
            res.status(200).json({
                status: 200,
                data: allEmployeesDeleted,
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
module.exports = { deleteAllEmployees };