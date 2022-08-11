const mongoose = require('mongoose')

const Schema = mongoose.Schema

const taskSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  startTime: {
    type: Date,
    required: true
  },
  endTime: {
    type: Date,
    required: true
  },
  projectId: {
    type: String,
    required: true
  },
  userId: {
    type: String,
    required: true
  },
  taskState: {
    type: String,
    required: true,
    enum: ['Pendiente', 'En progreso', 'Finalizada'],
    default: 'Pendiente'
  }
})

const Task = mongoose.model('Task', taskSchema)
module.exports = Task
