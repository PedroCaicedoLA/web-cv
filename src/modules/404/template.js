var yo = require('yo-yo');
var main = require('../../common/main');
var l = require('../../utils/translate');

module.exports = function () 
{
  var $el = yo`
  <div class="container">
    
    <div class="row">

      <div class="col s12">

        <h2 class="grey-text text-darken-4">${l.msg('Error 404 - Página no encontrada')}</h2>
        
        <h4 class="grey-text text-darken-3">${l.msg('Disculpe pero esa página no está en nuestros servidores :\'(')}</h4>
      
      </div>

    </div>

  </div>`;

  return main($el);
}

