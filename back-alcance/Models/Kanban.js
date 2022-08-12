const mongoose = require('mongoose')

const Schema = mongoose.Schema

const kanbanSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  category: {
    type: String,
    required: true
  },
  tasks: {
    type: Array,
    default: []
  }
})

const Kanban = mongoose.model('Kanban', kanbanSchema)
module.exports = Kanban;