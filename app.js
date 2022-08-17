const express = require('express');
const app = express();
const path = require('path')

// MongoDB Atlas es una base de datos de alta disponibilidad
const { mongoose } = require('./back-alcance/configDB')

//Cors es un middleware que permite que una aplicación pueda comunicarse con otra a través de una API
const cors = require('cors')

//Dotenv es una librería que permite leer variables de entorno
require('dotenv').config()


// main().catch(err => console.log(err));
// async function main() {
//   await mongoose.connect('mongodb://localhost:27017/test');
// }

//Static files
// app.use(express.static())
// console.log(path.join(__dirname/front-alcance/public))


//Middlewares
app.use(cors())
app.use(express.json())

//Routes
const usersRoutes = require('./back-alcance/apisRoutes/usersRoutes')
const tasksRoutes = require('./back-alcance/apisRoutes/tasksRoutes')
const projectsRoutes = require('./back-alcance/apisRoutes/projectsRoutes')
const kanbanRoutes = require('./back-alcance/apisRoutes/kanbanRoutes')

//Use ApisRoutes
app.use('/api/v1/users', usersRoutes);
app.use('/api/v1/tasks', tasksRoutes);
app.use('/api/v1/projects', projectsRoutes);
app.use('/api/v1/kanban', kanbanRoutes);

//Start server
const PORT = process.env.PORT || 3000
app.listen(PORT, () => console.log(`server started on ${PORT}`))
