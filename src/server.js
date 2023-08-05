// Importing the 'express' framework to create the web application
const express = require("express");

// Importing the 'body-parser' middleware to parse incoming request bodies
const bodyParser = require("body-parser");

// Creating an instance of the express application
const app = express();

// Using the 'body-parser' middleware to parse JSON data in incoming requests
app.use(bodyParser.json());

// Defining the port on which the server will listen for incoming requests
const PORT = 3000;

// Starting the server and listening on the specified port
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
