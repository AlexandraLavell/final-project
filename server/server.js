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



// add a project
// modify a project
// find a project by id/name
// find a project by worker
// find all projects
// delete a project
// delete all projects
// add a worker
// modify a worker
// find a worker by id/name
// find a worker by project
// find all workers
// delete a worker
// delete all workers
// add a calendar item
// modify a calendar item
// delete a calendar item
// find calandar items by worker
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

