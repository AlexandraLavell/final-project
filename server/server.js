// catch undeclared variables
"use strict";

// import the node_modules
const express = require("express");
const morgan = require("morgan");

// express object
const app = express()

// import handlers


// to log more info in the console
app.use(morgan("tiny"));
app.use(express.json());

// requests for static files will be directed to the public folder
app.use(express.static("public"));

// example
// .patch("/reservations/update", updateReservation)


// add a project
app.post("/projects", addProject);
// modify a project
app.patch("/projects/:id", modifyProject);
// find a project by id
app.get("/projects/:id", findProjectById);
// find a project by employee
app.get("/projects/employee/:id", findProjectByEmployee);
// find all projects
app.get("/projects", getAllProjects);
// delete a project
app.delete("/projects/:id", deleteProjectById);
// delete all projects
app.delete("/projects", deleteAllProjects);
// add a employee
app.post("employees", addEmployee);
// modify a employee
app.patch("/employees/:id", modifyEmployee);
// find an employee by id/name
app.get("/employee/:id", findEmployeeById);
// find an employee by project
app.get("/employees/project/:id");
// find all employees
app.get("/employees", getAllEmployees);
// delete a employee
app.delete("/employees/:id", deleteEmployee);
// delete all employees
app.delete("/employees", deleteAllEmployees);
// add a calendar item
// modify a calendar item
// delete a calendar item
// find calandar items by employee
// find calendar item by project
// find all calendar items







// catch all endpoint
app.get("*", (req,res) => {
    res.status(404).json({
        status: 404,
        message: "This page does not exist, please try again",
    });
});

// node creates the server and sets it to listen on port 8000
app.listen(8000, () => console.log("Listening on port 8000"));

