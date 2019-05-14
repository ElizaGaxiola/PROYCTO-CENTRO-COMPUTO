//Categoria.js

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Definir la coleccion y el esquema para Categoria
let Categoria = new Schema({
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
    collection: 'categoria'
});

module.exports = mongoose.model('Categoria', Categoria);