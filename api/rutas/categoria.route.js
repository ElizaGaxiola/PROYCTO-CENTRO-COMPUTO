// categoria.route.js

const express = require('express');
const app = express();
const categoriaRoutes = express.Router();

// Require categoria model in our routes module
let Categoria = require('../modelos/Categoria');

// Defined store route
categoriaRoutes.route('/add').post(function (req, res) {
  let categoria = new Categoria(req.body);
  categoria.save()
    .then(categoria => {
      res.status(200).json({'categoria': 'categoria se agrego correctamente'});
    })
    .catch(err => {
    res.status(400).send("Incapaz de guardar en la base de datos");
    });
});

// Defined get data(index or listing) route
categoriaRoutes.route('/').get(function (req, res) {
    Categoria.find(function (err, categoria){
    if(err){
      console.log(err);
    }
    else {
      res.json(categoria);
    }
  });
});

// Defined edit route
categoriaRoutes.route('/edit/:id').get(function (req, res) {
  let id = req.params.id;
  Categoria.findById(id, function (err, categoria){
      res.json(categoria);
  });
});

//  Defined update route
categoriaRoutes.route('/update/:id').post(function (req, res) {
  let id = req.params.id;
  Categoria.findById(id, function (err, categoria){
    if (!categoria){
      res.json('No se puede cargar el documento');
    }else{
        categoria.clave = req.body.clave;
        categoria.nombre = req.body.nombre;
        categoria.estatus = req.body.estatus;
        categoria.save().then(categoria => {
        res.json('Actualización completa');
      }).catch(err => {
          res.status(400).send("Incapaz de actualizar la base de datos");
      });
    }
  });
});

// Defined delete | remove | destroy route
categoriaRoutes.route('/delete/:id').get(function (req, res) {
    Categoria.findByIdAndRemove({_id: req.params.id}, function(err, business){
        if(err) res.json(err);
        else res.json('Eliminación exitosa');
    });
});

module.exports = categoriaRoutes;