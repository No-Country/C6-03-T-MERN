const express = require('express')
const path = require('path')
// Mongoose is a library that allows us to connect to a MongoDB database
const mongoose = require('mongoose')
// Enviroment variables
require('dotenv').config()
// MongoDB Models
const User = require('./Models/User')
const Project = require('./Models/Project')
// routes
const usersRoutes = require("./routes/users");
const projectsRoutes = require("./routes/projects");
// initialize express.
const app = express()
// connect to mongodb
const { MONGO_URI } = process.env
mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })

//Body Parser
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Static Files
const publicPath = path.resolve(__dirname, "./public");
app.use(express.static(publicPath));

app.use("/api/v1/users", usersRoutes);
app.use("/api/v1/projects", projectsRoutes);

//Puerto y arrancamos el servidor
const PORT = process.env.PORT || 3000
app.listen(PORT, () => console.log(`server started on ${PORT}`))
