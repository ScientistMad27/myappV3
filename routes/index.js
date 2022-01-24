var express = require('express');
var router = express.Router();
const fs = require ('fs')


/* GET home page. */ 
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Espress' });
});

//nuevos elementos 
// exportamos router
// index pagina principal 

router.get('/', (req, res) => {
  res.render('views/index');

});

// reciviendo los datos del formulario 

router.post('/index', (req, res) => {
  //  importo req.body  nombre,ip,fecha,corre,mensaje, y los guardo en la const

  const { nombre, ip, fecha, correo, mensaje} = req.body;
  
  //validacion para verificar que todos los campos del formulario esten rellenado por el usuario
  
  if (!nombre || !ip || !fecha || !correo || !mensaje ) {
      res.status(404).render('views/error');
      return;
  }
  
  let nuevoMensaje = {
      nombre,
      ip,
      fecha,
      correo,
      mensaje
  }
  // agrega una nueva lista o valor a la variable mensaje
  mensajes.push(nuevoMensaje);
  
  const agrega_mensaje = JSON.stringify(mensajes)
  console.log(req.body.json);
  
  // lee la informacion que viene de agrega_mensaje y la guarda en el archivo json en un
  // formato utf-8
  fs.writeFileSync('infoConta.json' , agrega_mensaje , 'utf-8' );

  res.redirect('/');
});


let json_mensaje = fs.readFileSync('infoConta.json');

// convierte un string a json y lo guarda en la variable
let mensajes = JSON.parse(json_mensaje); 




module.exports = router;