'use strict';

//require data file
const projects = require("../data").projects;

// modify a project
const modifyProject = async (req, res) =>  {
    try {
        // get the project id from the request parameters
        const { _id } = req.params;
        
        // get updated info from request body
        const { 
                project_name,
                approval,
                description,
                requested_budget,
                actual_budget,
                status,
                final_report,
                project_employees, // handled on the client side as part of the onSubmit function
                } = req.body;
      
        // find the project
        const projectFound = await projects.find((project) => project._id === _id); 
        
        // check for updated information        
        const newName = (!!project_name && (projectFound.project_name !== project_name)) ? project_name : projectFound.project_name;
        const newApproval = (!!approval && (projectFound.approval !== approval)) ? approval : projectFound.approval;
        const newDescription = (!!description && (projectFound.description !== description)) ? description : projectFound.description;
        const newRequested_budget = (!!requested_budget && (projectFound.requested_budget !== requested_budget)) ? requested_budget : projectFound.requested_budget;
        const newActual_budget = (!!actual_budget && (projectFound.actual_budget !== actual_budget)) ? actual_budget : projectFound.actual_budget;
        const newStatus = (!!status && (projectFound.status !== status)) ? status : projectFound.status;
        const newFinal_report = (!!final_report && (projectFound.final_report !== final_report)) ? final_report : projectFound.final_report;
        
        // update project info
        const updatedProjectInfo = { "_id": _id,
                                    "project_name": newName,
                                    "approval": newApproval,
                                    "description" : newDescription,
                                    "requested_budget" : newRequested_budget,
                                    "actual_budget" : newActual_budget,
                                    "status" : newStatus,
                                    "final_report" : newFinal_report,
                                    };

        // return the json object and status
        return (

            // SUCCESS return
            res.status(200).json({
                status: 200,
                data: updatedProjectInfo,
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
module.exports = { modifyProject };