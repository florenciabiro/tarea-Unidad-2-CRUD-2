var express = require('express');
var router = express.Router();
var novedadesModel = require('../../models/novedades.Model')
/* GET home page. */

/* router.get('/', function(req, res, next) {
  res.render('novedades', { title: 'Novedades ' });
});
 */
/* para controlar las novedades lo modifico  */
router.get('/', async function(req, res, next) {
  var novedades = await novedadesModel.getNovedades();

  res.render('admin/novedades',{
    title: 'Novedades ',
    layout : 'admin/layout',
    usuario:req.session.nombre,
    novedades
  });
});
/* para modificar */

/* para agregar */
router.get('/agregar', ( req, res, next) =>{
  res.render('admin/agregar',{
    title: 'Agregar ',
    layout : 'admin/layout'

  });
});






/* para eliminar una novedad  */
router.get('/eliminar/:id', async( req, res, next) =>{
  var id = req.params.id;

  await novedadesModel.deleteNovedadesById(id);
 
  res.redirect('/admin/novedades');
});
/* para modificar */
router.get('/modificar/:id', async( req, res, next) =>{
  var id = req.params.id;
  var novedad = await novedadesModel.getNovedadesById(id);
  res.render('admin/modificar',{  
    layout : 'admin/layout',
    title: 'Modificar ',
    novedad
  });
});



router.post ('/agregar', async (req, res , next) =>{  
  try{     
      if(req.body.titulo != "" && req.body.subtitulo != "" && req.body.cuerpo != ""){ 
        await novedadesModel.insertNovedad(req.body);
         res.redirect('/admin/novedades')
           
           } else {
               res.render('admin/agregar', {
                   layout : 'admin/layout', 
                   error: true,
                    message:' Todos los campos son requeridos '
                  }) 
           }         
          }  catch (error) {
      console.log (error)
      res.render('admin/agregar', {
        layout : 'admin/layout', 
        error: true,
         message:' No se cargo la novedad, intente nuevamente'
    }) 
  }
});
 /* para modificar */
 router.post ('/modificar', async (req, res , next) =>{  
  try{ 
    var obj= {
      
      titulo: req.body.titulo,
      subtitulo:req.body.subtitulo,
      cuerpo:req.body.cuerpo
    }    
      
        await novedadesModel.modificarNovedadById(obj, req.body.id);
         res.redirect('/admin/novedades');
                 
          }
  catch (error) {
      console.log (error)
      res.render('admin/modificar', {
        layout : 'admin/layout', 
        error: true, message:' No se modifico la novedad '
    }) 
  }
})
router.get('/modificar/:id', async( req, res, next) =>{
  var id = req.params.id;
  var novedad = await novedadesModel.getNovedadesById(id);
  res.render('admin/modificar',{  
    layout : 'admin/layout',
    novedad
  });
});

module.exports = router;
