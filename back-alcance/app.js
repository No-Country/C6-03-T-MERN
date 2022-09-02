const express = require("express");
const app = express();
const httpServer = require("http").createServer(app);
const cors = require("cors");
const corsManager = require("./cors/corsManager.js");
require("dotenv").config();
app.use(express.json());

const corsConfig = corsManager();
app.use(cors())
const socketManager = require("./socket/socketManager.js");
socketManager(httpServer, corsConfig.whitelist);


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


//Start server
const host = process.env.HOST || '0.0.0.0';
const PORT = process.env.PORT || 3000;
app.listen(PORT, host, () => console.log(`server started on ${PORT}`));

//Esuchar peticiones
httpServer.listen( process.env.PORT, () => console.log(`server started on ${process.env.PORT}`));


