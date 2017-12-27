require('babel-polyfill');

var page = require('page');

window.urlAPI = './server/'
window.pc = null

async function asyncLoadConf() 
{
  try 
  {
    if(!window.conf)
    {
        window.pc = await fetch(`${urlAPI}/conf.json`).then(res => res.json());
    }
  } 
  catch (err) 
  {
    return console.log(err);
  }

  window.pc.getURL = strURL => `${urlAPI}/${strURL}`

  //Los módulos
  require('./modules/homepage');
  require('./modules/about');
  require('./modules/blog');
  
  //Siempre se coloca
  require('./common/footer');
  
  page();
}

localStorage.locale = localStorage.locale || pc.default.lang;

asyncLoadConf();