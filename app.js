const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const fs = require ('fs')

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
//modulo añadido

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine','pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

// nuevos elementos
// archivos estaticos  para los arcchivos css, js y tos las imagenes 
app.use(express.static(path.join(__dirname, 'public'))); //

//estableciendo la direccion donde se escuentra la carpeta views con todas las vistas
app.set('views', path.join(__dirname, 'views')); 

/*utilizando la constante __dirname que nos ofrece la direccion del archivo.
 El modulo path.join nos contatena los directorios y lo vuelve multi plataforma */


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