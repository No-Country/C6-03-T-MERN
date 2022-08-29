const express = require("express");
const app = express();
const path = require("path");

//Dotenv es una librería que permite leer variables de entorno
require("dotenv").config({ path:'variables.env'});

//-- Config DB MONGO --//
const mongoose = require("mongoose");
// "mongodb+srv://german1:german@cluster0.7vpbe5a.mongodb.net/?retryWrites=true&w=majority";
// const MONGOURI = "mongodb+srv://MERN_ALCANCE:alcance123@cluster0.fc2kmvg.mongodb.net"
// mongoose.connect(MONGOURI, { useNewUrlParser: true, useUnifiedTopology: true })

mongoose.connect(process.env.DB_URL)
  .then((DB) => console.log("DB is connected"))
  .catch((err) => console.error(err));

  
  
  
  
  
  //Cors es un middleware que permite que una aplicación pueda comunicarse con otra a través de una API
  const cors = require("cors");
  
  //Static files
  // app.use(express.static())
  // console.log(path.join(__dirname/front-alcance/public))
  
  //Middlewares
  app.use(cors());
app.use(express.json());

//Routes
const usersRoutes = require("./apisRoutes/usersRoutes");
const tasksRoutes = require("./apisRoutes/tasksRoutes");
const projectsRoutes = require("./apisRoutes/projectsRoutes");
const kanbanRoutes = require("./apisRoutes/kanbanRoutes");

//Use ApisRoutes
app.use("/api/v1/users", usersRoutes);
app.use("/api/v1/tasks", tasksRoutes);
app.use("/api/v1/projects", projectsRoutes);
app.use("/api/v1/kanban", kanbanRoutes);

//Start server
const host = process.env.HOST || '0.0.0.0';
const PORT = process.env.PORT || 3000;
app.listen(PORT, host, () => console.log(`server started on ${PORT}`));

/* ------------------------ app.js antes ------------------------------ */

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
