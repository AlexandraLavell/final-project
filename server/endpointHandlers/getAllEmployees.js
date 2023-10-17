"use strict";

const employees = require("../data").employees;

// get all items from the database
const getAllEmployees = async (req, res) => {
  try {
    return (
      // SUCCESS return
      res.status(200).json({
        status: 200,
        data: employees, //allEmployees,
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
module.exports = { getAllEmployees };
