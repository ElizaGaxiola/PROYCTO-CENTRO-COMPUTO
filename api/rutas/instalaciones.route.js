// instalaciones.route.js

const express = require('express');
const app = express();
const instalacionesRoutes = express.Router();

// Require instalaciones model in our routes module
let Instalaciones = require('../modelos/Instalaciones');

// Defined store route
instalacionesRoutes.route('/add').post(function (req, res) {
  console.log(req.body)
  let instalaciones = new Instalaciones(req.body);
  instalaciones.save()
    .then(instalaciones => {
      res.status(200).json({'instalaciones': 'Instalacion se agrego correctamente'});
    })
    .catch(err => {
    res.status(400).send("Incapaz de guardar en la base de datos");
    });
});

// Defined get data(index or listing) route
instalacionesRoutes.route('/').get(function (req, res) {
    Instalaciones.find(function (err, instalaciones){
    if(err){
      console.log(err);
    }
    else {
      res.json(instalaciones);
    }
  });
});

// Defined edit route
instalacionesRoutes.route('/edit/:id').get(function (req, res) {
  let id = req.params.id;
  Instalaciones.findById(id, function (err, instalaciones){
      res.json(instalaciones);
  });
});

//  Defined update route
instalacionesRoutes.route('/update/:id').post(function (req, res) {
  let id = req.params.id;
  Instalaciones.findById(id, function (err, instalaciones){
    if (!instalaciones){
      res.json('No se puede cargar el documento');
    }else{
      instalaciones.clave = req.body.clave;
      instalaciones.nombre = req.body.nombre;
      instalaciones.edificio = req.body.edificio;
      instalaciones.equipo = req.body.equipo;
      instalaciones.responsable = req.body.responsable;
      instalaciones.estatus = req.body.estatus;
      instalaciones.save().then(instalaciones => {
        res.json('Actualización completa');
      }).catch(err => {
          res.status(400).send("Incapaz de actualizar la base de datos");
      });
    }
  });
});

// Defined delete | remove | destroy route
instalacionesRoutes.route('/delete/:id').get(function (req, res) {
    Instalaciones.findByIdAndRemove({_id: req.params.id}, function(err, business){
        if(err) res.json(err);
        else res.json('Eliminación exitosa');
    });
});

module.exports = instalacionesRoutes;