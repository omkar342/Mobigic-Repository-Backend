// Importing the 'express' framework to create the web application
import express from "express";

// Importing the 'body-parser' middleware to parse incoming request bodies
import bodyParser from "body-parser";

// Creating an instance of the express application
const app = express();

// Using the 'body-parser' middleware to parse JSON data in incoming requests
app.use(bodyParser.json());

// Defining the port on which the server will listen for incoming requests
const PORT = 3000;

import connectDB from "./config/db.js";

import userRoutes from "./routes/user-routes.js";

connectDB();

app.get("/", (req, res) => {
  res.send("Hello World!");
});
console.log("OK");
app.use("/api/user", userRoutes);
// app.use("api/data", dataRoutes);

// Starting the server and listening on the specified port
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
