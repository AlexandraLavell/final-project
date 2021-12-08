// catch undeclared variables
"use strict";

// import the node_modules
const express = require("express");
const morgan = require("morgan");

// express object
const app = express()

// import handlers
const { getAllEmployees } = require("./endpointHandlers/getAllEmployees");
const { getEmployeeById } = require("./endpointHandlers/getEmployeeById");
const { getEmployeesByProject } = require("./endpointHandlers/getEmployeesByProject");
const { addEmployee } = require("./endpointHandlers/addEmployee");
const { modifyEmployee } = require("./endpointHandlers/modifyEmployee");
const { deleteEmployee }= require("./endpointHandlers/deleteEmployee");
const { deleteAllEmployees } = require("./endpointHandlers/deleteAllEmployees");
const { getAllProjects } = require("./endpointHandlers/getAllProjects");
const { getProjectById } = require("./endpointHandlers/getProjectById");
const { getProjectsByEmployee} = require("./endpointHandlers/getProjectsByEmployee");
const { addProject } = require("./endpointHandlers/addProject");
const { modifyProject } = require("./endpointHandlers/modifyProject");
const { deleteProjectById } = require("./endpointHandlers/deleteProjectById");
const { deleteAllProjects } = require("./endpointHandlers/deleteAllProjects");

// to log more info in the console
app.use(morgan("tiny"));
app.use(express.json());

// requests for static files will be directed to the public folder
app.use(express.static("public"));

///////////////////////
// EMPLOYEE ENDPOINTS//
///////////////////////
// get all employees
app.get("/employees", getAllEmployees);
// get an employee by id
app.get("/employee/:id", getEmployeeById);
// get an employee by project
app.get("/employees/project/:id", getEmployeesByProject);
// add a employee
app.post("/employees", addEmployee);
// modify a employee
app.patch("/employees/:id", modifyEmployee);
// delete a employee
app.delete("/employees/:id", deleteEmployee);
// delete all employees - FOR DEVELOPMENT
app.delete("/employees", deleteAllEmployees);

//////////////////////
// PROJECT ENDPOINTS//
//////////////////////
// get all projects
app.get("/projects", getAllProjects);
// get a project by id
app.get("/projects/:id", getProjectById);
// get a project by employee
app.get("/projects/employee/:id", getProjectsByEmployee);
// add a project
app.post("/projects", addProject);
// modify a project
app.patch("/projects/:id", modifyProject);
// delete a project
app.delete("/projects/:id", deleteProjectById);
// delete all projects - FOR DEVELOPMENT
app.delete("/projects", deleteAllProjects);

// catch all endpoint
app.get("*", (req,res) => {
    res.status(404).json({
        status: 404,
        message: "This page does not exist, please try again",
    });
});

// node creates the server and sets it to listen on port 8000
app.listen(8000, () => console.log("Listening on port 8000"));

