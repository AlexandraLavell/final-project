'use strict';

//require Mongodb
const { MongoClient } = require("mongodb");

// NOT IMPLEMENTED require mailer for sending email
const nodemailer = require("nodemailer");

//get URI
require("dotenv").config({path:"./.env"});
const { MONGO_URI } = process.env;

const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}

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

        // create a new client
        const client = new MongoClient(MONGO_URI, options);

        // connect to the client
        await client.connect();

        // connect to the database
        const db = client.db("goodmorning");
        console.log("CONNECTED");
        
        const newProject = {    _id,
                                project_name,
                                approval,
                                description,
                                requested_budget,
                                actual_budget,
                                status,
                                final_report };
    

        // add a project
        const projectAdded = await db.collection("projects").insertOne(newProject);
    
        // close the collection
        client.close();
        console.log("DISCONNECTED");

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