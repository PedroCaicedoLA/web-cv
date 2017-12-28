import { CLIENT_RENEG_LIMIT } from 'tls';

var page = require('page');
var empty = require('empty-element');
//var template = require('./template');
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
    //Agregamos el contenido
    var main = document.getElementById('main-container');
    main.innerHTML = 'Error 404'

    next()
  }
)