var createError = require('http-errors');
var express = require('express');

var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

// configuracion del .env smtp
require('dotenv').config();

//vincualcion con las bd 
var pool = require('./models/bd');

//para la variable de session parte a 
var session = require('express-session');


var indexRouter = require('./routes/index');
var contactoRouter = require('./routes/contacto');
var galeriaRouter = require('./routes/galeria');
var nosotrosRouter = require('./routes/nosotros');
var novedadesRouter = require('./routes/novedades');
var serviciosRouter = require('./routes/servicios');
var usersRouter = require('./routes/users');

/*  creo la ruta  */
var loginRouter = require('./routes/admin/login');

var adminRouter = require ('./routes/admin/novedades');
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//segunda parte de la variable de sesion 
app.use(session({
  secret:'qawsedrfplolikuj74',
  resave: false,
  saveUninitialized:true
}));

// en relacion a la variable de session 
secured = async( req, res, next)=>{
  try{
    console.log (req.session.id_usuario);
    if(req.session.id_usuario){
      next();
    }else{
      res.redirect('/admin/login');
    }
  } catch (error) {
    console.log(error);
  }
}

/* middle************** */

app.use(function(req, res, next){
  //si no existe la var de sesion crea un objeto vacio 
  if(!req.session.vistas){
    req.session.vistas = {};
  }
/**var sin valor la inicializo en 1
 * si existe le ++
 */
  if(!req.session.vistas[req.originalUrl]){
    req.session.vistas[req.originalUrl] = 1;
  }
  else {    
      req.session.vistas[req.originalUrl] ++;
    }
    console.log(req.session.visitas);
  next();
})




app.use('/', indexRouter);
app.use('/contacto', contactoRouter);
app.use('/galeria', galeriaRouter);
app.use('/nosotros', nosotrosRouter);
app.use('/novedades', novedadesRouter);
app.use('/servicios', serviciosRouter);

app.use('/users', usersRouter);

// modelo de la pagina de prueba para probar funciones etc. etc
//http://localhost:3000/prueba
app.get('/prueba', function ( req,res){
  res.send('esat es una pagina para puebas');
});
// cierro el get 


/* habilito la ruta  */
app.use ('/admin/login', loginRouter);

app.use ('/admin/novedades', secured, adminRouter);
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
