/* const { Schema, model } = require("mongoose"); */

const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const UsuariosSchema = Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});

/* module.exports = model("Usuario", UsuariosSchema); */
const Usuario = mongoose.model("Usuario", UsuariosSchema);
module.exports = Usuario;
