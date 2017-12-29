require('babel-polyfill');

var page = require('page');

window.urlAPI = '/server/'
window.pc = null

async function asyncLoadConf() 
{
    //Cargamos las configuraciones
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

    //El idioma por defecto
    localStorage.locale = localStorage.locale || pc.default.lang
    
    //Helper para obtener la url aplicando la url base 
    window.pc.getURL = strURL => `${urlAPI}/${strURL}`
    window.pc.getIMG = strURL => `/img/${strURL}`

    //Los módulos
    require('./modules/homepage');
    require('./modules/about');
    require('./modules/blog');
    require('./modules/projects');
    require('./modules/terms-conditions');
    require('./modules/versions');
    require('./modules/404');

    //Siempre se coloca
    require('./common/footer');

    page();
}

asyncLoadConf();