const colors = require("colors");
const express = require("express");
const mongoose = require("mongoose")

const port = 3030;
const app = express();

const todoRoutes = require("./routes/todoRoutes");

mongoose.connect('mongodb://localhost/todolist')
  .then(() =>
    console.log("-------------------------------------------"),
    console.log("Connected succcessfully".green),
    console.log("-------------------------------------------")
  )
  .catch((err) =>
    console.error(err)
  );

app.use("/todos", todoRoutes);

app.listen(port, () => {
  console.log("-------------------------------------------")
  console.log("Server on port 3030:".green, "http://localhost:3030/".white)
  console.log("-------------------------------------------")
});


