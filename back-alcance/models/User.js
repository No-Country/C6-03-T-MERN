const mongoose = require('mongoose')

const Schema = mongoose.Schema

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: false,
    trim: true,
    lowercase: true,
    minlength: 3,
    maxlength: 20
  },
  password: {
    type: String,
    required: true,        
  },
  role: {
    type: String,
    required: true,
    enum: ['user', 'admin'],
    default: 'user',
    trim: true,
    lowercase: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true
  },
  country: {
    type: String,
    required: false,
    default: 'Argentina',
    enum: [
        'Argentina',
        'Bolivia',
        'Brasil',
        'Chile',
        'Colombia',
        'Ecuador',
        'Mexico',
        'Paraguay',
        'Peru',
        'Uruguay',
        'Otro'
      ]   
  },
  projectId: {
    type: Array, 
  }
})

const User = mongoose.model('User', userSchema)
module.exports = User
