const mongoose = require('mongoose');

let todo = new mongoose.Schema({
  name: String,
  number: String
})

var Todo = mongoose.model('Todo', todo);

module.exports = Todo;
