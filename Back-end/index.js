const colors = require("colors");
const express = require("express");
const mongoose = require("mongoose")

const port = 3030;
const app = express();

const todoRoutes = require("./routes/todoRoutes");

const connectionOptions = { useUnifiedTopology: true,
useNewUrlParser: true};


app.use(express.json());

//connect to mongo atlas(cluster) > todo(db) > todos (collection)
mongoose.connect('mongodb+srv://Daniel_Veloza:Panda2003@mongotest.mdsvb2n.mongodb.net/todos', connectionOptions)
  .then(() =>
    console.log("Mongoose connected succcessfully".green),
  )
  .catch((err) =>
    console.error(err)
);

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE")
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header("Access-Control-Allow-Credentials", "true");
  next();
});


app.use("/todos", todoRoutes);

app.listen(port, () => {
  console.log("-------------------------------------------")
  console.log("Server on port:".green + port, "http://localhost:3030/".white)
  console.log("-------------------------------------------")
});
