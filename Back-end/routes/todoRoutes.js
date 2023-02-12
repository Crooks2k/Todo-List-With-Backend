//This code is using Express Router, a library for creating routing in Node applications.

const router = require("express").Router();// import Router module
const Todo = require("../models/Todo"); //import Todo from Express
// which is usedto acces thedata stored in the database

// generando las constantes necesarioas para las consulas derrolladas por express
router.get("/", (req, res) => { //GET list of all elements from the data base
  Todo.find((err, result) => {    // Consulting data base
      if(err) throw new Error(err);
      res.json(result);  // Define & return the result in json
  });
});
router.post("/", (req, res) => { //CREATE a new element into the collection
  Todo.create(req.body, (err, result) => {
      if(err) throw new Error(err);
      res.json(result);
  });
});

router.put("/:id", (req, res) => {// find and update an unique element into the collection
  Todo.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true }, (err, result) => {
      if(err) throw new Error(err);
      res.json(result);
  });
});

router.delete("/:id", (req, res) => {  //find and delete an unique element into the collection
  Todo.findOneAndRemove({ _id: req.params.id }, (err, result) => {
      if(err) throw new Error(err);
      res.end();
  });
});

module.exports = router;
