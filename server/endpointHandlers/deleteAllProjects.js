'use strict';

// delete all projects in the database FOR DEV PURPOSES
const deleteAllProjects = async (req, res) =>  {
    try {        
        // delete all projects - are you sure? (database doesn't exist so nothing is deleted)
        const allProjectsDeleted = true; 

        // return the json object and status
        return (

            // SUCCESS return
            res.status(200).json({
                status: 200,
                data: allProjectsDeleted,
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
module.exports = { deleteAllProjects };