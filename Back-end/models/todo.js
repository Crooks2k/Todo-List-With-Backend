const mongoose = require("mongoose");
const TodoSchema = new mongoose.Schema({     //Define an schema object to implementing in another parts of the application
  title: String,
  completed: Boolean
})
//also define ad store in the mongo DB database,to give access torecovery and store datafrom there
module.exports = mongoose.model("Todo",TodoSchema); //model name, if this model not exist in db create, create todolist db and todo collection in atlas.

