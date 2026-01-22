// //initially js was browser language but with node js it can be used for backend as well(server side programming)
// console.log("Hello from server.js");
// //client side vs server side
// //client side: runs on browser, interacts with user, manipulates DOM, limited access to system resources
// //server side: runs on server, handles requests, manages databases, full access to system resources
// // client request -> server processes request -> server sends response -> client receives response
// //Node.js: runtime environment to run JavaScript on server side
// //Express.js: web framework for Node.js to build web applications and APIs
// // middleware: functions that process requests before they reach the final route handler
// // request-middleware(it is inbuild in express)-response (cycle)

// // i want to change that backend that has node for that use npm init -y
// // if -y is not used manually have to fill the details 
// // npm install express to install express 
// // express is a library of node js that makes server creation easy and fast
// // package.json file is the proof that npm init -y was used(node package manager)
// // for frontend we use import but in node js we use require and for export we use module.exports
// // if we use import and export then have to use type module in package.json

// const express = require('express');
// const app = express();
// // if i create a server then have to listen to a port 
// const mongoose = require('mongoose');//import mongoose to interact with mongodb database
// // mongoose.connect(
// //     process.env.MONGO_URI
// // )
// const dotenv = require('dotenv');
// app.use(express.json());//to parse json data from request body
// // after excution of this middleware we can access req.body , it should be used before routes
// // what is routes -> endpoints to handle client requests
// // example -> / , /data , /user , /product
//         //connect to mongodb database//url is obtained from atlas ,connectstring in step 2
// mongoose.connect(
//     process.env.MONGO_URI
//  )
//     .then(() => {
//         console.log("Connected to MongoDB");
//     })
//     .catch((err) => {
//         console.log("Error connecting to MongoDB:", err);
//     });

// app.use('/auth',require('./controllers/authControllers'));
// app.use('/task',require('./controllers/taskControllers'));

// app.get('/', (req, res) => {
//     // what is this / -> root route, how to access it -> localhost:3000/
//     res.send("Hello from Express");
// });
// // post request example
// app.post('/data', (req, res) => {
//     // res.send("Data received via POST request");
//     const temp=req.body;//here we get the data sent from client
//     console.log(temp);
//     res.send("Data received via POST request");
// });
// app.listen(3000, () => {
//     console.log("Server is running on port 3000");
// });
// req: request from client
// res: response from server
// app.get -> to handle get requests
// '/' -> root route
// res.send -> to send response to client

// node --watch backend/server.js to run the server with auto restart on changes 
// get request -> to fetch data from server
// post request -> to send data to server
// put request -> to update data on server
// delete request -> to delete data from server

// get -retrieve data
// post -create data
// put -update data
// delete -remove data
// patch-update particular field in data
//what are these http methods -> they are used to perform different operations on server data

// error numbers
// 100-199 informational
// 200-299 success
// 300-399 redirection
// 400-499 client error
// 500-599 server error
// example -> 404 not found, 500 internal server error, 200 ok

// what is postman -> it is an api testing tool
// why use postman -> to test api endpoints without frontend
// how to use postman -> create requests, set headers, send data, view responses

// -------------------------------------------------------------
// we use mangoose to interact with mongodb database in node js
// mongoose is an ODM (object data modeling) library for mongodb and node js
// it provides a schema-based solution to model application data
// to install mongoose -> npm install mongoose
// to use mongoose -> require it in your node js file
// mongoose.connect() -> to connect to mongodb database

// ---------------------------------------------------------------
// for environment variables we use dotenv package
// to install dotenv -> npm install dotenv
// to use dotenv -> require and configure it in your node js file
// create a .env file in the root directory
// add environment variables in .env file in KEY=VALUE format
// access environment variables using process.env.KEY

// for clean separe controllers and routes we create separate folders for them
// controllers -> functions to handle requests and responses
// routes -> define api endpoints and map them to controller functions
// models -> define data schemas and interact with database
// middlewares -> functions to process requests before they reach controllers
// utils -> utility functions and helpers
// config -> configuration files and settings
// services -> business logic and external api calls
// tests -> test cases and test suites
// ---------------------------------------------------------------
const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

// Load environment variables
dotenv.config();

const app = express();

// Middleware
app.use(express.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.log('Error connecting to MongoDB:', err));

// Import ROUTERS (not controllers!)
const authRoutes = require('./routes/authRoutes');
const taskRoutes = require('./routes/taskRoutes');

// Use ROUTERS
app.use('/auth', authRoutes);
app.use('/task', taskRoutes);

// Test route
app.get('/', (req, res) => {
  res.send('Hello from Express');
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
