import { CLIENT_RENEG_LIMIT } from 'tls';

var page = require('page');
var empty = require('empty-element');
var title = require('title');
var header = require('../../common/header');
var l = require('../../utils/translate');
var loading = require('../../utils/loading')
var template = require('./template');

let objPage = pc.pages[pc.pagesIds['Versiones']]

let showdown  = require('showdown'),
converter = new showdown.Converter(pc.showdownjs);

page(
  [`${objPage.url.es}`, `${objPage.url.en}`], 
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
  try
  {
    console.log('pc',pc)
    let dataFile = await fetch(pc.getURL(`${pc.serverURL['versions']}/${localStorage.locale}.md`)).then(res => res.text());
    ctx.html = converter.makeHtml(dataFile);
    next();
  } 
  catch (err) 
  {
    return console.log(err);
  }
}
