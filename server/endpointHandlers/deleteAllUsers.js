'use strict';

// delete all users from the database FOR DEV PURPOSES
const deleteAllUsers = async (req, res) =>  {
    try {
        //delete all users YIKES (database doesn't exist so nothing is deleted)
        const allUsersDeleted = await db.collection("users").deleteMany({ }); 

        // return the json object and status
        return (

            // SUCCESS return
            res.status(200).json({
                status: 200,
                data: allUsersDeleted,
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
module.exports = { deleteAllUsers };