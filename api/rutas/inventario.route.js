// instalaciones.route.js

const express = require('express');
const app = express();
const inventarioRoutes = express.Router();

// Require instalaciones model in our routes module
let Inventario = require('../modelos/Inventario');

// Defined store route
inventarioRoutes.route('/add').post(function (req, res) {
  let inventario = new Inventario(req.body);
  inventario.save()
    .then(inventario => {
      res.status(200).json({'inventario': 'Inventario se agrego correctamente'});
    })
    .catch(err => {
    res.status(400).send("Incapaz de guardar en la base de datos");
    });
});

// Defined get data(index or listing) route
inventarioRoutes.route('/').get(function (req, res) {
    Inventario.find(function (err, inventario){
    if(err){
      console.log(err);
    }
    else {
      res.json(inventario);
    }
  });
});

// Defined edit route
inventarioRoutes.route('/edit/:id').get(function (req, res) {
  let id = req.params.id;
  Inventario.findById(id, function (err, inventario){
      res.json(inventario);
  });
});

//  Defined update route
inventarioRoutes.route('/update/:id').post(function (req, res) {
  let id = req.params.id;
  Inventario.findById(id, function (err, inventario){
    if (!inventario){
      res.json('No se puede cargar el documento');
    }else{
        inventario.tipo = req.body.tipo;
        inventario.serie = req.body.serie;
        inventario.marca = req.body.marca;
        inventario.modelo = req.body.modelo;
        inventario.procesador = req.body.procesador;
        inventario.discoDuro = req.body.discoDuro;
        inventario.ram = req.body.ram;
        inventario.fechaRegistro = req.body.fechaRegistro;
        inventario.estatus = req.body.estatus;
        inventario.save().then(inventario => {
        res.json('Actualización completa');
      }).catch(err => {
          res.status(400).send("Incapaz de actualizar la base de datos");
      });
    }
  });
});

// Defined delete | remove | destroy route
inventarioRoutes.route('/delete/:id').get(function (req, res) {
    Inventario.findByIdAndRemove({_id: req.params.id}, function(err, business){
        if(err) res.json(err);
        else res.json('Eliminación exitosa');
    });
});

module.exports = inventarioRoutes;