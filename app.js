const express = require('express')
const path = require('path')
const mongoose = require('mongoose')
require('dotenv').config()
const User = require('./Models/User')
const Project = require('./Models/Project')
//initialize express.
const app = express()
// connect to mongodb
const { MONGO_URI } = process.env
mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })

//Body Parser
app.use(express.json({ extended: false, limit: '50mb' }))
app.use(express.urlencoded({ extended: false, limit: '50mb' }))

// Como hostear react directo desde express? Asi -->
// Primero le decimos a express que use todos los archivos del build de react asi:
app.use(express.static(__dirname + '/front-alcance/dist'))

// Luego le decimos a express que sirva todo eso desde el home //
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/front-alcance/dist', 'index.html'))
})

app.get('/api/createUser', (req, res) => {
  const user = new User({
    username: 'Juan' + Math.floor(Math.random() * 1000),
    email: 'pepe' + Math.random() + '@gmail.com',
    password: '123456',
    role: 'user',
    country: 'Argentina'
  })
  try {
    user.save()
    res.send(user)
  } catch (error) {
    res.send(error)
  }
})

app.get('/api/createProject', (req, res) => {
  const project = new Project({
    name: 'Proyecto' + Math.floor(Math.random() * 1000),
    uuidv4: '123456' + Math.random(),
    users: [],
    calendars: [],
    notes: []
  })

  try {
    project.save();
    res.send(project);
  } catch (error) {
    res.send(error)
  }
})

app.get('/api/users', (req, res) => {
    User.find({}, (error, users) => {
        if (error) {
        res.send(error)
        } else {
        res.send(users)
        }
    }).sort({ _id: -1 })
    }
  )

app.get('/api/projects', (req, res) => {
    Project.find({}, (error, projects) => {
        if (error) {
        res.send(error)
        } else {
        res.send(projects)
        }
    }).sort({ _id: -1 })
    }
  )

//Puerto y arrancamos el servidor
const PORT = process.env.PORT || 3000
app.listen(PORT, () => console.log(`server started on ${PORT}`))
