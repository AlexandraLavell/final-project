"use strict";

//require data file
const projects = require("../data").projects;

// get all projects from the database
const getAllProjects = async (req, res) => {
  try {
    return (
      // SUCCESS return
      res.status(200).json({
        status: 200,
        data: projects, //allProjects,
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
module.exports = { getAllProjects };
