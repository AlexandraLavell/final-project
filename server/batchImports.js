// use Mondodb
const { MongoClient } = require("mongodb");

// get initial data set
const { employees, projects, users } = require("./data.js");

// get URI
require("dotenv").config({path:"../.env"});
const { MONGO_URI } = process.env;

const options= {
    useNewUrlParser: true,
    useUnifiedTopology: true,
};

const batchImport = async () => {

    // create a new client
    const client = new MongoClient(MONGO_URI, options);

    // connect the client
    await client.connect();

    // connect to the database
    const db = client.db("goodmorning");
    console.log("CONNECTED");

    // add the batch of data to the collection
    await db.collection("employees").insertMany(employees);
    await db.collection("projects").insertMany(projects);
    await db.collection("users").insertMany(users);
    
    // close the collection
    client.close();
    console.log("DISCONNECTED");

}

batchImport();