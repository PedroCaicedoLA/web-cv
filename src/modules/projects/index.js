import { CLIENT_RENEG_LIMIT } from 'tls';

var page = require('page');
var empty = require('empty-element');
var template = require('./template');
var title = require('title');
var header = require('../../common/header');
var l = require('../../utils/translate');
var loading = require('../../utils/loading')

let objPage = pc.pages[pc.pagesIds['Proyectos']]

let showdown  = require('showdown'),
converter = new showdown.Converter(pc.showdownjs);

page(
  [`${objPage.url.es}/:url`, `${objPage.url.en}/:url`], 
  header, 
  loading, 
  loadHTML,
  function (ctx, next) 
  {
    //Dependiendo del idioma cambiar
    let strTitle = l.msg('Pedro Caicedo - Desarrollador de Software');
    let pageCurrent = ctx.path.split('/')
    strTitle = pageCurrent.length == 2 && pageCurrent[1] != ''? `${pageCurrent[1]} | ${strTitle}` : strTitle
    title(strTitle);
    
    var main = document.getElementById('main-container');
    empty(main).appendChild(template(ctx.html));

    //Soporte a carusel
    $('.carousel').carousel({
			fullWidth: true,
			indicators: true
		});
  }
)

async function loadHTML (ctx, next)
{
  let id = 1;
  console.log('Se debe cargar el HTML Según la url -> ctx.params.url:', ctx.params.url)

  try{
    let dataFile = await fetch(pc.getURL(`/projects/${id}/${localStorage.locale}.md`)).then(res => res.text());
    ctx.html = converter.makeHtml(dataFile);
    next();
  } catch (err) {
    return console.log(err);
  }
}
