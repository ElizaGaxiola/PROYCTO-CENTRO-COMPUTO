//Usuario.js

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Definir la coleccion y el esquema para Usuario
let Usuario = new Schema({
  tipo: {
    type: String
  },
  matricula: {
    type: String
  },
  nombre: {
    type: String
  },
  apellido: {
    type: String
  },
  password: {
    type: String
  },
  estatus: {
    type: Number
  }
},{
    collection: 'Usuario'
});

module.exports = mongoose.model('usuario', Usuario);