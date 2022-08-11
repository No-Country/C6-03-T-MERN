const mongoose = require('mongoose')

const Schema = mongoose.Schema

const calendarSchema = new Schema({
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

const Calendar = mongoose.model('Calendar', noteSchema)
module.exports = Note