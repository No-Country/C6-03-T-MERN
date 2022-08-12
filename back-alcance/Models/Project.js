const mongoose = require('mongoose')

const Schema = mongoose.Schema

const projectSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  uuidv4: {
    type: String,
    required: true
  },
  users: {
    type: Array,
    required: true,
    default: []
  },
  startTime: {
    type: Date,
    required: true
  },
  endTime: {
    type: Date,
    required: true
  },
  notes: {
    type: Array,
    default: []
  },
  kanban: {
    type: Array,
    default: []
  }
})

const Project = mongoose.model('Project', projectSchema)
module.exports = Project
