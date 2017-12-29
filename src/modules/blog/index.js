import { CLIENT_RENEG_LIMIT } from 'tls';

var page = require('page');
var empty = require('empty-element');
var template = require('./template');
var title = require('title');
var request = require('superagent');
var header = require('../../common/header');
var axios = require('axios');
var l = require('../../utils/translate');
var loading = require('../../utils/loading')

let objPage = pc.pages[pc.pagesIds['Blog']]

let showdown  = require('showdown'),
converter = new showdown.Converter({
  noHeaderId: true,
  parseImgDimension: true,
});

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

async function loadHTML (ctx, next)
{
  let id = 1;
  console.log('Se debe cargar el HTML Según la url -> ctx.params.url:', ctx.params.url)

  try{
    let dataFile = await fetch(pc.getURL(`/blog/${id}/${localStorage.locale}.md`)).then(res => res.text());
    ctx.html = converter.makeHtml(dataFile);
    next();
  } catch (err) {
    return console.log(err);
  }
}
