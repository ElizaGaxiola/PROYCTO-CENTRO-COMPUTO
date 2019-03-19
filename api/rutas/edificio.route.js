// edificio.route.js

const express = require('express');
const app = express();
const edificioRoutes = express.Router();

// Require edificio model in our routes module
let Edificio = require('../modelos/Edificio');

// Defined store route
edificioRoutes.route('/add').post(function (req, res) {
  let edificio = new Edificio(req.body);
  edificio.save()
    .then(edificio => {
      res.status(200).json({'edificio': 'edificio se agrego correctamente'});
    })
    .catch(err => {
    res.status(400).send("Incapaz de guardar en la base de datos");
    });
});

// Defined get data(index or listing) route
edificioRoutes.route('/').get(function (req, res) {
    Edificio.find(function (err, edificio){
    if(err){
      console.log(err);
    }
    else {
      res.json(edificio);
    }
  });
});

// Defined edit route
edificioRoutes.route('/edit/:id').get(function (req, res) {
  let id = req.params.id;
  Edificio.findById(id, function (err, edificio){
      res.json(edificio);
  });
});

//  Defined update route
edificioRoutes.route('/update/:id').post(function (req, res) {
  let id = req.params.id;
  Edificio.findById(id, function (err, edificio){
    if (!edificio){
      res.json('No se puede cargar el documento');
    }else{
      edificio.clave = req.body.clave;
      edificio.nombre = req.body.nombre;
      edificio.estatus = req.body.estatus;
      edificio.save().then(edificio => {
        res.json('Actualización completa');
      }).catch(err => {
          res.status(400).send("Incapaz de actualizar la base de datos");
      });
    }
  });
});

// Defined delete | remove | destroy route
edificioRoutes.route('/delete/:id').get(function (req, res) {
    Edificio.findByIdAndRemove({_id: req.params.id}, function(err, business){
        if(err) res.json(err);
        else res.json('Eliminación exitosa');
    });
});

module.exports = edificioRoutes;