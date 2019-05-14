// server.js

const express = require('express'),
    path = require('path'),
    bodyParser = require('body-parser'),
    cors = require('cors'),
    mongoose = require('mongoose');
    config = require('./DB');
    
const instalacionesRoutes = require('./rutas/instalaciones.route');
const inventarioEquipoRoutes = require('./rutas/inventarioEquipo.route');
const edificioRoutes = require('./rutas/edificio.route');
const usuarioRoutes = require('./rutas/usuario.route');
const categoriaRoutes = require('./rutas/categoria.route');

    mongoose.Promise = global.Promise;
    mongoose.connect(config.DB, { useNewUrlParser: true }).then(
      () => {console.log('Database is connected') },
      err => { console.log('Can not connect to the database'+ err)}
    );

    const app = express();
    app.use(bodyParser.json());
    app.use(cors());
    app.use('/instalaciones', instalacionesRoutes);
    app.use('/inventarioEquipo', inventarioEquipoRoutes);
    app.use('/edificio', edificioRoutes);
    app.use('/usuario', usuarioRoutes);
    app.use('/categoria', categoriaRoutes);
    let port = process.env.PORT || 4000;

    const server = app.listen(port,function(){
        console.log('Listening on port ' + port);
    });