// // express is the framework we're going to use to handle requests
// const express = require('express')
// // path module
// const path = require('path')
// // cors es un middleware que permite que una aplicación 
// // pueda comunicarse con otra a través de una API
// const cors = require('cors')
// // dotenv es una librería que permite leer variables de entorno
// require('dotenv').config()
// // MongoDB Atlas es una base de datos de alta disponibilidad
// const mongoose = require('mongoose')

// // routes
// const usersRoutes = require('./routes/users')
// const projectsRoutes = require('./routes/projects')

// // initialize express.
// const app = express()

// // middlewares
// app.use(cors())
// app.use(express.json())

// // connect to mongodb
// const { MONGO_URI } = process.env
// mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })

// app.use('/api/v1/users', usersRoutes)
// app.use('/api/v1/projects', projectsRoutes)

// //Puerto y arrancamos el servidor
// const PORT = process.env.PORT || 3000
// app.listen(PORT, () => console.log(`server started on ${PORT}`))
