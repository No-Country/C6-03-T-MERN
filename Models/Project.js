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
    default: [],
    }, 
})

const Project = mongoose.model('Task', projectSchema)
module.exports = Project