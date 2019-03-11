//instalaciones.js

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Definir la coleccion y el esquema para instalaciones
let Inventario = new Schema({
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
  fechaRegistro: {
    type: String
  },
  estatus: {
    type: String
  }
},{
    collection: 'inventario'
});

module.exports = mongoose.model('Inventario', Inventario);