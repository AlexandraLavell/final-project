"use strict";

const users = require("../data").users;

// get all users from the database
const getAllUsers = async (req, res) => {
  try {
    console.log(users);
    return (
      // SUCCESS return
      res.status(200).json({
        status: 200,
        data: users, //allUsers,
      })
    );
  } catch (err) {
    // ERROR return
    res.status(400).json({
      status: 400,
      message: err.message,
    });
  }
};

// export handler function
module.exports = { getAllUsers };
