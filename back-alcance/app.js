const express = require("express");
//Dotenv es una librería que permite leer variables de entorno
require("dotenv").config();

// Crear el servidor express
const app = express();
// const path = require("path");

<<<<<<< HEAD
//Dotenv es una librería que permite leer variables de entorno
require("dotenv").config({ path:'variables.env'});
=======
// MongoDB Atlas es una base de datos de alta disponibilidad
const { mongoose } = require("./configDB");

//Cors es un middleware que permite que una aplicación pueda comunicarse con otra a través de una API
const cors = require("cors");

>>>>>>> 2b2dcdcc3177b8aa53a1ab2cb0c2a9b5f3d3feba

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

// Directorio Público
app.use( express.static('public') );

//Routes
const authRoutes = require("./apisRoutes/authRoutes");
const eventsRoutes = require("./apisRoutes/eventsRoutes.js");
const usersRoutes = require("./apisRoutes/usersRoutes");
const tasksRoutes = require("./apisRoutes/tasksRoutes");
const projectsRoutes = require("./apisRoutes/projectsRoutes");
const kanbanRoutes = require("./apisRoutes/kanbanRoutes");

//Use ApisRoutes
app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/events", eventsRoutes);
app.use("/api/v1/users", usersRoutes);
app.use("/api/v1/tasks", tasksRoutes);
app.use("/api/v1/projects", projectsRoutes);
app.use("/api/v1/kanban", kanbanRoutes);

<<<<<<< HEAD
//Start server
const host = process.env.HOST || '0.0.0.0';
const PORT = process.env.PORT || 3000;
app.listen(PORT, host, () => console.log(`server started on ${PORT}`));
=======
//Esuchar peticiones
app.listen( process.env.PORT, () => console.log(`server started on ${process.env.PORT}`));
>>>>>>> 2b2dcdcc3177b8aa53a1ab2cb0c2a9b5f3d3feba


