'use strict';

//require data file
const projects = require("../data").projects;

// NOT IMPLEMENTED require mailer for sending email
const nodemailer = require("nodemailer");



// NOT IMPLEMENTED
const transporter = nodemailer.createTransport({
    port: 465,
    host: "stmp.gmail.com",
        auth:{
                user: "AAAAAAAAAAAAAAAA",
                pass: "xxxxxxxxxxxxx",
                },
    secure: true,
})

// NOT IMPLEMENTED
const mailData = {
    from: "SENDER EMAIL",
    to: "RECIPIENT EMAIL",
    subject: "SUBJECT",
    text: "MESSAGE",
    html: "MESSAGE WITH TAGS",
    attachments : [
        {
            filename: "file.txt",
            path: "path",
        }
    ]
};

// get all items from the database
const addProject = async (req, res) =>  {

    try {
         // get project details from the body, default values listed
        const { _id = "pr" + Date.now(),
                project_name = "",
                approval = "",
                description = "",
                requested_budget = "",
                actual_budget = "",
                status = "",
                final_report = "" } = req.body;

        
        const newProject = {    _id,
                                project_name,
                                approval,
                                description,
                                requested_budget,
                                actual_budget,
                                status,
                                final_report };
    

        // add a project
        const projectAdded = projects.push(newProject);
    
        // NOT IMPLEMENTED upon sucessful submit send an email to the admin
        // transporter.sendMail(mailOptions);

        // return the json object and status
        return (

            // SUCCESS return
            res.status(200).json({
                status: 200,
                data: projectAdded,
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
module.exports = { addProject };