const mongoose = require("mongoose");
const TodoSchema = new mongoose.Schema({
  title: String,
  completed: Boolean
})

module.exports = mongoose.model("Todo",TodoSchema); //model name, if this model not exist in db create, create todolist db and todo collection in atlas.

