//instalaciones.js

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Definir la coleccion y el esquema para instalaciones
let Inventario = new Schema({
  tipo: {
    type: String
  },
  serie: {
    type: String
  },
  marca: {
    type: String
  },
  modelo: {
    type: String
  },
  procesador: {
    type: String
  },
  discoDuro: {
    type: String
  },
  ram: {
    type: String
  },
  fechaRegistro: {
    type: String
  },
  estatus: {
    type: Number
  }
},{
    collection: 'inventario'
});

module.exports = mongoose.model('Inventario', Inventario);