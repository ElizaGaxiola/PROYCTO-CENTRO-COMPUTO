//instalaciones.js

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Definir la coleccion y el esquema para instalaciones
let Instalaciones = new Schema({
  clave: {
    type: String
  },
  nombre: {
    type: String
  },
  edificio: {
    type: Number
  },
  estatus: {
    type: Number
  }
},{
    collection: 'instalaciones'
});

module.exports = mongoose.model('Instalaciones', Instalaciones);