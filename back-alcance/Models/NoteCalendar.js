const mongoose = require('mongoose')

const Schema = mongoose.Schema

const noteCalendarSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  schedule : {
    type: Timestamp,
    required: true
  },
  date: {
    type: Date,
    required: true
  },
  projectId: {
    type: String,
    required: true
  },
})

const NoteCalendar = mongoose.model('NoteCalendar', noteCalendarSchema)
module.exports = NoteCalendar