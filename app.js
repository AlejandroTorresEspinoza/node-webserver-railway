//Ejemplo 1
/*const express = require('express')
const app = express()
app.get('/', function (req, res) {
    res.send('Hello World')
})
app.listen(8080)*/

//Ejemplo 2
/*const express = require('express')
const app = express()
app.get('/', function (req, res) {
    res.send('Home Page')
})
app.get('/hola-mundo', function (req, res) {
    res.send('Hola Mundo en su respectiva ruta')
})
app.listen(8080)*/

//Ejemplo 3
/*const express = require('express')
const app = express()
app.get('/', function (req, res) {
    res.send('Home Page')
})
app.get('/hola-mundo', function (req, res) {
    res.send('Hola Mundo en su respectiva ruta')
})
app.get('*', function (req, res) {
    res.send('404 | Page not found')
})
app.listen(8080)*/

//Ejemplo 4
/*const express = require('express')
const app = express()
app.get('/', (req, res) => {
    res.send('Home Page')
})
app.get('/hola-mundo', (req, res) => {
    res.send('Hola Mundo en su respectiva ruta')
})
app.get('*', (req, res)=> {
    res.send('404 | Page not found')
})
app.listen(8080)*/

//Ejemplo 5
/*const express = require('express')
const app = express()
const port = 8080;
app.get('/', (req, res) => {
    res.send('Home Page')
})
app.get('/hola-mundo', (req, res) => {
    res.send('Hola Mundo en su respectiva ruta')
})
app.get('*', (req, res)=> {
    res.send('404 | Page not found')
})
app.listen(port, () => {
    console.log(`Example app listenining al http://localhost:${port}`)
})*/

//Ejemplo 6
/*const express = require('express')
const app = express()
const port = 8080;
//para servir contenido estatico
app.use(express.static('public')); //definicion de midelware express. si public esta en otro sitio especificar path
app.get('/', (req, res) => {
    res.send('Home Page')
});
app.get('/hola-mundo', (req, res) => {
    res.send('Hola Mundo en su respectiva ruta')
});
app.listen(port, () => {
    console.log(`Example app listenining al http://localhost:${port}`)
});
app.get('/generic', (req, res) => {
    res.sendFile(__dirname + '/public/generic.html')
});
app.get('/elemment', (req, res) => {
    res.sendFile(__dirname + '/public/element.html')
});
app.get('*', (req, res)=> {
    res.send('404 | Page not found')
});*/

//Ejemplo 7
/*const express = require('express');
const app = express();
const port = 8080;

// Configurar el motor de plantillas Handlebars
app.set('view engine', 'hbs');

// Servir contenido estático
app.use(express.static('views'));

app.get('/', (req, res) => {
  res.render('home', {
    nombre: 'Armando David',
    titulo: 'Curso de Node'
  });
});

app.listen(port, () => {
    console.log(`Example app listenining al http://localhost:${port}`)
});*/

//Ejemplo 8
/*const express = require('express')
const hbs = require('hbs');
const app = express()
const port = 8080;
//handlebar:
app.set('view engine', 'hbs'); // para usar el handlebars para express
hbs.registerPartials(__dirname + '/views/partials'); //para usar parciales

// Servir contenido estático
app.use(express.static('views'));

app.get('/', (req, res) => {
  res.render('home', {
    nombre: 'Armando David',
    titulo: 'Curso de Node'
  });
});

app.listen(port, () => {
    console.log(`Example app listenining al http://localhost:${port}`)
});*/

//Ejemplo 9
const express = require('express')
const hbs = require('hbs');
require('dotenv').config();
const app = express()
const port = process.env.PORT;
//handlebar:
app.set('view engine', 'hbs'); // para usar el handlebars para express
hbs.registerPartials(__dirname + '/views/partials'); //para usar parciales
//para servir contenido estatico
app.use(express.static('views')); //definicion de midelware express. si public esta en otro sitio especificar path
app.get('/', (req,res) => {
  res.render('home', { // estos son los argumentos
    nombre: 'Armando David',
    titulo: 'Curso de Node'
  });
})
app.get('/elements', (req, res) => {
        res.render('elements', {
          nombre: 'Armando David',
    
          titulo: 'Curso de Node'
        })
      });
  app.get('/generic', (req, res) => {
    res.render('generic', {
      nombre: 'Armando David',
      titulo: 'Curso de Node'
    })
  });
  app.get('*', (req, res)=> {
    res.sendFile(__dirname +'/public/404.html');
  });
app.listen(port, () => {
    console.log(`Example app listenining al http://localhost:${port}`)
});
