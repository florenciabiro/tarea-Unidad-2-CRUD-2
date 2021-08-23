var express = require('express');
var router = express.Router();
var usuariosModel = require('./../../models/usuariosModel');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('admin/login', {
      layout:'admin/layout',
      title: 'Admin Login'
  });
});

router.get ('/logout', function (req, res, next){
  req.session.destroy();
  res.render ('admin/login', {
      layout: 'admin/layout'
  });
});


router.post ('/', async (req, res , next) =>{  
  try{
      var usuario=req.body.usuario;
      var password = req.body.password;
      var data = await  usuariosModel.getUserByUsernameAndPassword(usuario, password); 
      /* si los datos esatn bien  el controlador me va a amndar a otro lado  */     
      if(data != undefined){
          req.session.id_usuario = data.id;
          req.session.nombre = data.usuario;
          res.redirect('/admin/novedades');  
          /* si los datos estan mal  */        
           } else {
               res.render('admin/login', {
                   layout : 'admin/layout', 
                   error: true
               }) ;
           }         
  } catch (error) {
      console.log (error);
  }
})
module.exports = router;
