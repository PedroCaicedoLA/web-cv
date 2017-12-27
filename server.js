var express = require('express');
var showdown  = require('showdown'),
converter = new showdown.Converter({
  noHeaderId: false,
});

var app = express();

app.set('view engine', 'pug');

app.use(express.static('public'));

let pc = {
  name: 'Pedro Caicedo',
  img: 'http://2.gravatar.com/avatar/8b801a2544619e18ec571facb3f03029?s=100&d=Mystery%20Man&r=g',
  urlBaseAPI: '.',
  version: '1.0.0',
  default:{
    lang:'es'
  },
  active:{
    url:'/',
  },
  pages:[
    {
      id: 1,
      name:'Inicio',
      type: 'menu',
      url:{
        es: '/',
        en: '/'
      },
    },
    {
      id: 2,
      name:'Blog',
      type: 'menu',
      url:{
        es: '/blog',
        en: '/blog'
      },
    },
    {
      id: 3,
      name: 'Proyectos',
      type: 'menu',
      url:{
        es: '/proyectos',
        en: '/projects'
      },
    },
    {
      id: 4,
      name: 'Acerca de',
      type: 'menu',
      url:{
        es: '/acerca-de',
        en: '/about'
      },
    }
  ],
  pagesIds:{
    'Inicio': 0,
    'Blog': 1,
    'Proyectos': 2,
    'Acerca de': 3,
  },
  socialNetworks:[
    {
      id:1,
      name:'twitter',
      classIcon: 'fa-twitter',
      url: 'https://twitter.com/caicedo1089'
    },
    {
      id:2,
      name:'facebook',
      classIcon: 'fa-facebook',
      url: 'https://www.facebook.com/pedro.caicedo'
    },
    {
      id:3,
      name:'google-plus',
      classIcon: 'fa-google-plus',
      url: 'https://plus.google.com/+PedroCaicedo'
    },
    {
      id:4,
      name:'instagram',
      classIcon: 'fa-instagram',
      url: 'https://www.instagram.com/caicedo1089/'
    },
    {
      id:5,
      name:'github',
      classIcon: 'fa-github',
      url: 'https://github.com/caicedo1089'
    },
    {
      id:6,
      name:'linkedin',
      classIcon: 'fa-linkedin',
      url: 'https://www.linkedin.com/in/caicedo/'
    }
  ]
}

pc = JSON.stringify(pc)

app.get(
  '/', 
  function (req, res) 
  {
    res.render('index', { title: 'Pedro Caicedo - Desarrollador de Software', pc: pc });
  }
)

/*app.get(
  '/blog', 
  function (req, res) 
  {
    res.render('index', { title: 'Blog | Pedro Caicedo - Desarrollador de Software', pc: pc });
  }
)*/
app.get(
  '/blog/:post', 
  function (req, res) 
  {
    res.render('index', { title: 'Blog | Pedro Caicedo - Desarrollador de Software', pc: pc });
  }
)

app.get(
  ['/proyectos', '/projects'], 
  function (req, res) 
  {
    res.render('index', { title: 'Proyectos | Pedro Caicedo - Desarrollador de Software', pc: pc });
  }
)

app.get(
  ['/acerca-de', '/about'], 
  function (req, res) 
  {
    res.render('index', { title: 'Acerca de | Pedro Caicedo - Desarrollador de Software', pc: pc });
  }
)

app.get('/api/blog/:id', function (req, res, next) 
{
  const dataFile = require('fs').readFileSync(`./data/blog/${req.params.id}/es.md`, "utf8", function(err, data) { console.log('Error', err) })
  let html = converter.makeHtml(dataFile);
  
  console.log('post:', req.params.id, html)

  res.send(html);  

});

app.get('/api/news', function (req, res, next) 
{
  var pictures = [
    {
      title: '¿Rediseñar tu logo? Esta fue mi experiencia',
      description: '¿Necesitas proyectar una idea, empresa o marca personal? sin duda alguna el logo es nuestro primer aliado. Algunos pensarán que el proceso de diseño o rediseño del logo es muy fácil (esa puede ser nuestra primera impresión si sólo vemos el resultado final) y muchas veces desconocemos por completo el proceso de creación.',
      categories:['desarrollo', 'javascript'],
      type: 'Blog',
      updatedAt: new Date().getTime(),
      createdAt: new Date().getTime(),
      banner: 'http://next.materializecss.com/images/office.jpg',
      url: {
        en: '/blog/1',
        es: '/blog/1'
      }
    },
    {
      title: 'Un título',
      description: '¿Necesitas proyectar una idea, empresa o marca personal? sin duda alguna el logo es nuestro primer aliado. Algunos pensarán que el proceso de diseño o rediseño del logo es muy fácil (esa puede ser nuestra primera impresión si sólo vemos el resultado final) y muchas veces desconocemos por completo el proceso de creación.',
      categories:['desarrollo', 'javascript'],
      type: 'Blog',
      updatedAt: new Date().getTime(),
      createdAt: new Date().getTime(),
      banner: 'http://next.materializecss.com/images/office.jpg',
      url: {
        en: '/blog/1',
        es: '/blog/1'
      }
    },
    {
      title: '¿Rediseñar tu logo? Esta fue mi experiencia',
      description: '¿Necesitas proyectar una idea, empresa o marca personal? sin duda alguna el logo es nuestro primer aliado. Algunos pensarán que el proceso de diseño o rediseño del logo es muy fácil (esa puede ser nuestra primera impresión si sólo vemos el resultado final) y muchas veces desconocemos por completo el proceso de creación.',
      categories:['desarrollo', 'javascript'],
      type: 'Blog',
      updatedAt: new Date().getTime(),
      createdAt: new Date().getTime(),
      banner: 'http://next.materializecss.com/images/office.jpg',
      url: {
        en: '/blog/bli-bli',
        es: '/blog/bla-bla'
      }
    },
  ];

  setTimeout(function () {
    res.send(pictures);  
  }, 2000)
});

app.listen(
  3000, 
  function (err) 
  {

    if (err) return console.log('Hubo un error'), process.exit(1);

    console.log('Platzigram escuchando en el puerto 3000');

  }
)

// Convertir URL a slug -> https://gist.github.com/codeguy/6684588
function string_to_slug (str) 
{
  str = str.replace(/^\s+|\s+$/g, ''); // trim
  str = str.toLowerCase();

  // remove accents, swap ñ for n, etc
  var from = "àáäâèéëêìíïîòóöôùúüûñç·/_,:;";
  var to   = "aaaaeeeeiiiioooouuuunc------";
  for (var i=0, l=from.length ; i<l ; i++) {
      str = str.replace(new RegExp(from.charAt(i), 'g'), to.charAt(i));
  }

  str = str.replace(/[^a-z0-9 -]/g, '') // remove invalid chars
      .replace(/\s+/g, '-') // collapse whitespace and replace by -
      .replace(/-+/g, '-'); // collapse dashes

  return str;
}