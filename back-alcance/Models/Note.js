const mongoose = require('mongoose')

const Schema = mongoose.Schema

const noteSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  projectId: {
    type: String,
    required: true
  },
})

const Note = mongoose.model('Note', noteSchema)
module.exports = Note