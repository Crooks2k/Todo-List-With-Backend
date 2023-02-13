//This code is setting up a server with Express and Mongoose to store and manipulate data in a MongoDB Atlas cluster
require("dotenv").config();
const cors = require('cors'); //requires the cors module, which is used to config server.headers
const mongoURI = process.env.MONGO_URI;
const colors = require("colors");  // Addcolors to the console register
const express = require("express");  // requires the Express library, which is used to create a web server.
const mongoose = require("mongoose") // requires the Mongoose library  -- which is used to connect to a MongoDB database.
const port = 3030;
const app = express();//Uses the Express library to create the server

// which is used to connect to a MongoDB database.
const todoRoutes = require("./routes/todoRoutes"); //requires the todoRoutes file,ENDPOINST
const connectionOptions = { useUnifiedTopology: true,
useNewUrlParser: true};

app.use(express.json()); //Used to parse incoming or transform requests with JSON loads

const corsOptions = {
  origin: "https://todo-list-front-end-lyart.vercel.app/, https://todo-list-front-end-git-main-crooks2k.vercel.app/, https://todo-list-front-c8tu35mpa-crooks2k.vercel.app/, https://todo-list-front-end-crooks2k.vercel.app/",
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Origin", "X-Requested-With", "Content-Type", "Accept"],
  credentials: true
};

app.use(cors(corsOptions))

//connect to mongo atlas(cluster) > todo(db) > todos (collection)
mongoose.connect(mongoURI, connectionOptions)
  .then(() =>  //response header to allow cross-origin requests
    console.log("Mongoose connected succcessfully".green),
  )
  .catch((err) =>
    console.error(err)
);
// Responseheaders CORS (Cross-Origin Resource Sharing)thisconfig allows resources to be requested from a different domain
// app.use((req, res, next) => {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE") // Allow-Methods header to "GET, POST, PUT, DELETE"
//   res.header(
//     "Access-Control-Allow-Headers",
//     "Origin, X-Requested-With, Content-Type, Accept"
//   );
//   res.header("Access-Control-Allow-Credentials", "true");
//   next();
// });


app.use("/todos", todoRoutes); //define route /todos to proccess req with endpoints.
// todo routes es todo el contenido a exportar desde el front-ed--import from TODO HACIA - todoroutes y los endpoints definidos en este archivo
app.listen(port, () => {
  console.log("-------------------------------------------")
  console.log("Server on port:".green + port, "http://localhost:3030/".white)
  console.log("-------------------------------------------")
});
