import { CLIENT_RENEG_LIMIT } from 'tls';

var page = require('page');
var empty = require('empty-element');
var template = require('./template');
var title = require('title');
var header = require('../../common/header');
var l = require('../../utils/translate');
var loading = require('../../utils/loading')

page(
  ['/', '/blog', '/proyectos', '/projects'],
  header, 
  loading, 
  asyncLoad, 
  function (ctx, next) 
  {
    //Dependiendo del idioma cambiar
    let strTitle = l.msg('Pedro Caicedo - Desarrollador de Software');
    let pageCurrent = ctx.path.split('/')
    strTitle = pageCurrent.length == 2 && pageCurrent[1] != ''? `${pageCurrent[1]} | ${strTitle}` : strTitle
    title(strTitle);
    
    //Agregamos el contenido
    var main = document.getElementById('main-container');
    empty(main).appendChild(template(ctx.news));
  }
)

async function asyncLoad(ctx, next) 
{
  try 
  {
    ctx.news = await fetch(pc.getURL(pc.serverURL.news)).then(res => res.json());
    next();
  } 
  catch (err) 
  {
    return console.log(err);
  }
}