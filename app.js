const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
require('dotenv').config();
const User = require('./Models/User');
//initialize express.
const app = express();
// connect to mongodb
const { MONGO_URI } = process.env;
mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });

//Body Parser
app.use(express.json({ extended: false, limit: '50mb'}));
app.use(express.urlencoded({extended: false, limit: '50mb' }));

// Como hostear react directo desde express? Asi --> 
// Primero le decimos a express que use todos los archivos del build de react asi:
 app.use(express.static(__dirname + "/front-alcance/dist"));

// Luego le decimos a express que sirva todo eso desde el home //
 app.get("/", (req, res) => {
     res.sendFile(path.join(__dirname, "/front-alcance/dist", "index.html"))
 });

 app.get("/api/users", (req, res) => {
    const user = new User({
        name: 'Juan',
        email: 'diego@gmail.com',
        password: '123456',
        avatar: '123323',
        date: Date.now()
    });   
    try {
        user.save();
        res.send(user);
    }	catch (error) {
        res.send(error);
    }
    res.send(user);     
}    );

//Puerto y arrancamos el servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`server started on ${PORT}`));