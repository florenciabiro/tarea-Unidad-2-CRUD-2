var express = require('express');
var router = express.Router();
var novedadesModel = require('../models/novedades.Model')
/* GET home page. */
router.get('/', async function(req, res, next) {
  var novedades = await novedadesModel.getNovedades();
  res.render('novedades', {
    isNovedades:true,
    title : 'Novedades',
    
    vistas :req.session.vistas[req.originalUrl],


    novedades
  });
});

/* app.get('/novedades', function(req, res){
  res.render('novedades', {
    nombre: 'novedades', 
    vistas :req.session.vistas[req.originalUrl]
  });
}); */
module.exports = router;
