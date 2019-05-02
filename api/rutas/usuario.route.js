// usuario.route.js

const express = require('express');
const app = express();
const usuarioRoutes = express.Router();

// Require usuario model in our routes module
let Usuario = require('../modelos/Usuario');

// Defined store route
usuarioRoutes.route('/add').post(function (req, res) {
  let usuario = new Usuario(req.body);
  usuario.save()
    .then(usuario => {
      res.status(200).json({'usuario': 'Usuario se agrego correctamente'});
    })
    .catch(err => {
    res.status(400).send("Incapaz de guardar en la base de datos");
    });
});

// Defined get data(index or listing) route
usuarioRoutes.route('/').get(function (req, res) {
    Usuario.find(function (err, usuario){
    if(err){
      console.log(err);
    }
    else {
      res.json(usuario);
    }
  });
});

// Defined edit route
usuarioRoutes.route('/edit/:id').get(function (req, res) {
  let id = req.params.id;
  Usuario.findById(id, function (err, usuario){
      res.json(usuario);
  });
});

//  Defined update route
usuarioRoutes.route('/update/:id').post(function (req, res) {
  let id = req.params.id;
  Usuario.findById(id, function (err, usuario){
    if (!usuario){
      res.json('No se puede cargar el documento');
    }else{
      usuario.matricula = req.body.matricula;
      usuario.nombre = req.body.nombre;
      usuario.apellido = req.body.apellido;
      usuario.password = req.body.password;
      usuario.tipo = req.body.tipo;
      usuario.estatus = req.body.estatus;
      usuario.save().then(usuario => {
        res.json('Actualización completa');
      }).catch(err => {
          res.status(400).send("Incapaz de actualizar la base de datos");
      });
    }
  });
});

// Defined delete | remove | destroy route
usuarioRoutes.route('/delete/:id').get(function (req, res) {
    Usuario.findByIdAndRemove({_id: req.params.id}, function(err, business){
        if(err) res.json(err);
        else res.json('Eliminación exitosa');
    });
});

module.exports = usuarioRoutes;