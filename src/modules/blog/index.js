import { CLIENT_RENEG_LIMIT } from 'tls';

var page = require('page');
var empty = require('empty-element');
var template = require('./template');
var title = require('title');
var request = require('superagent');
var header = require('../../common/header');
var axios = require('axios');
var l = require('../../utils/translate');

let objPage = pc.pages[pc.pagesIds['Blog']]

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
  }
)

function loading(ctx, next) 
{
  var container = document.createElement('div');
  var loadingEl = document.createElement('div');
  container.classList.add('loader-container');
  loadingEl.classList.add('loader');
  container.appendChild(loadingEl);
  var main = document.getElementById('main-container');
  empty(main).appendChild(container);
  next();
}

async function loadHTML (ctx, next)
{
  let id = 1;
  console.log('Se debe cargar el HTML Según la url -> ctx.params.url:', ctx.params.url)

  try{
    ctx.html = await fetch(`/api/blog/${id}`).then(res => res.text());
    next();
  } catch (err) {
    return console.log(err);
  }
}
