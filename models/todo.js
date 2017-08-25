const mongoose = require('mongoose');

const todoSchema = mongoose.Schema({
  tasks: String,
  date: Number
})

module.exports = mongoose.model('Todo', todoSchema, 'task-list');
