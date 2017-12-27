var yo = require('yo-yo');
var main = require('../../common/main');
var l = require('../../utils/translate');
let cardNew = require('../../common/card-new');

module.exports = function (news) 
{
  var $el = yo`
  <div class="container timeline">
    
    <div class="row">

      <div class="col s12 cards-container">

        ${
          news.map( objNew => cardNew(objNew, true))
        }

      </div>

    </div>

  </div>`;

  return main($el);
}

