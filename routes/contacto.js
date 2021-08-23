var express = require('express');
const { getMaxListeners } = require('process');
var router = express.Router();

// el nodemailer lo requiere para el smtp
var nodemailer = require('nodemailer');

/* GET home page. muestra la pagina*/
router.get('/', function(req, res, next) {
  res.render('contacto', {
    isContacto:true,
    title: 'Contacto'
  }); 
});

// que pasa con el envio de las variables
router.post('/', async(req, res, next) => {
  var nombre = req.body.nombre;
  var apellido = req.body.apellido;
  var email = req.body.email;
  var telefono = req.body.telefono;
  var mensaje = req.body.mensaje;


  /* array de elementos 
  // a quien
  // subjet
  //concateno los 4 var para el mensaje  */
  var obj = {
    to: 'birobistro@gmail.com', 
    subject :'CONTACTO desde la  WEB',
    html: nombre + "<br>"+ apellido + " quiere contactarse con usted por la web CAFEBISTRO por medio de este mail" + email + ". <br> Su mensaje es  :" + mensaje + " .<br> Su teléfono es : " + telefono 
  }

  var transport = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port : process.env.SMTP_PORT,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    }
  }); 

var info = await transport.sendMail(obj);

// confirmacion de envio 
res.render('contacto',{
  message:'Se mensaje se ha enviado con exito !!! <br> <br> En momentos nos comunicaremos con usted. '  
  });


 }); // cierra la peticion post 
 
 module.exports = router;