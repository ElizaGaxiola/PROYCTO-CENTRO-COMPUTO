// instalaciones.route.js

const express = require('express');
const app = express();
const inventarioEquipoRoutes = express.Router();

// Require instalaciones model in our routes module
let InventarioEquipo = require('../modelos/InventarioEquipo');

// Defined store route
inventarioEquipoRoutes.route('/add').post(function (req, res) {
  let inventarioEquipo = new InventarioEquipo(req.body);
  inventarioEquipo.save()
    .then(inventarioEquipo => {
      res.status(200).json({'inventario': 'Inventario se agrego correctamente'});
    })
    .catch(err => {
    res.status(400).send("Incapaz de guardar en la base de datos");
    });
});

// Defined get data(index or listing) route
inventarioEquipoRoutes.route('/').get(function (req, res) {
  InventarioEquipo.find(function (err, inventarioEquipo){
    if(err){
      console.log(err);
    }
    else {
      res.json(inventarioEquipo);
    }
  });
});

// Defined edit route
inventarioEquipoRoutes.route('/edit/:id').get(function (req, res) {
  let id = req.params.id;
  InventarioEquipo.findById(id, function (err, inventarioEquipo){
      res.json(inventarioEquipo);
  });
});

//  Defined update route
inventarioEquipoRoutes.route('/update/:id').post(function (req, res) {
  let id = req.params.id;
  InventarioEquipo.findById(id, function (err, inventarioEquipo){
    if (!inventarioEquipo){
      res.json('No se puede cargar el documento');
    }else{
      inventarioEquipo.tipo = req.body.tipo;
      inventarioEquipo.serie = req.body.serie;
      inventarioEquipo.marca = req.body.marca;
      inventarioEquipo.modelo = req.body.modelo;
      inventarioEquipo.procesador = req.body.procesador;
      inventarioEquipo.discoDuro = req.body.discoDuro;
      inventarioEquipo.ram = req.body.ram;
      inventarioEquipo.fechaRegistro = req.body.fechaRegistro;
      inventarioEquipo.estatus = req.body.estatus;
      inventarioEquipo.save().then(inventarioEquipo => {
        res.json('Actualización completa');
      }).catch(err => {
          res.status(400).send("Incapaz de actualizar la base de datos");
      });
    }
  });
});

// Defined delete | remove | destroy route
inventarioEquipoRoutes.route('/delete/:id').get(function (req, res) {
  InventarioEquipo.findByIdAndRemove({_id: req.params.id}, function(err, business){
        if(err) res.json(err);
        else res.json('Eliminación exitosa');
    });
});

module.exports = inventarioEquipoRoutes;