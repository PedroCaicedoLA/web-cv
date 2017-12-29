import { CLIENT_RENEG_LIMIT } from 'tls';

var page = require('page');
var empty = require('empty-element');
var template = require('./template');
var title = require('title');
var header = require('../../common/header');
var loading = require('../../utils/loading')
var l = require('../../utils/translate');

page(
  ['*'],
  header, 
  loading,
  function (ctx, next) 
  {
    let strTitle = l.msg('Error 404 - Página no encontrada')
    title(strTitle);

    //Agregamos el contenido
    var main = document.getElementById('main-container');
    empty(main).appendChild(template());

    next()
  }
)