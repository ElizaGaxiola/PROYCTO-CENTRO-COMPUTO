//Edificio.js

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Definir la coleccion y el esquema para Edificio
let Edificio = new Schema({
  clave: {
    type: String
  },
  nombre: {
    type: String
  },
  estatus: {
    type: Number
  }
},{
    collection: 'edificio'
});

module.exports = mongoose.model('Edificio', Edificio);