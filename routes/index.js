var express = require('express');
var router = express.Router();

// GET home page. 
// no solo me trae la pagina hbs 
//maneja el activo
//maneja el title
router.get('/', function(req, res, next) {
  res.render('index', {
    isHome:true,
    title : 'Home'
  });
});

module.exports = router;
