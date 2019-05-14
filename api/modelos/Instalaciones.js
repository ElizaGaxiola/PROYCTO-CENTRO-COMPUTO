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
    type: String
  },
  equipo: {
    type: String
  },
  reponsable:{
    type: String
  },
  estatus: {
    type: Number
  }
},{
    collection: 'instalaciones'
});

module.exports = mongoose.model('Instalaciones', Instalaciones);