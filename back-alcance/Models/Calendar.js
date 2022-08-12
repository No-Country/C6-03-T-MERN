const mongoose = require('mongoose')

const Schema = mongoose.Schema

const calendarSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  month: {
    type: Number,
    required: true
  },
  noteCalendar: {
    type: Array,
    default: []
  },
  projectId: {
    type: String,
    required: true
  }
})

const Calendar = mongoose.model('Calendar', calendarSchema)
module.exports = Calendar;