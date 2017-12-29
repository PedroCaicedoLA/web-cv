var yo = require('yo-yo');
var main = require('../../common/main');
var l = require('../../utils/translate');

module.exports = function (html) 
{
  //console.log(html)
  //html = 'vacio'
  var $el = eval(`yo\`
  <div class="container projects grey-text text-darken-3">
    
    <div class="row">

      <div class="col s12">

        

      </div>

    </div>

  </div>
  \`
  `);
  
  $el.innerHTML = html

  return main($el);
}

