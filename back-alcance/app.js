const express = require("express");
//Dotenv es una librería que permite leer variables de entorno
require("dotenv").config();

// Crear el servidor express
const app = express();
// const path = require("path");

// MongoDB Atlas es una base de datos de alta disponibilidad
const { mongoose } = require("./configDB");

//Cors es un middleware que permite que una aplicación pueda comunicarse con otra a través de una API
const cors = require("cors");


// main().catch(err => console.log(err));
// async function main() {
//   await mongoose.connect('mongodb://localhost:27017/test');
// }

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

//Esuchar peticiones
app.listen( process.env.PORT, () => console.log(`server started on ${process.env.PORT}`));


