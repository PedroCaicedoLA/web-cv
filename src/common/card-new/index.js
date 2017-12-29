var yo = require('yo-yo');
var l = require('../../utils/translate');

module.exports = function (objNew, withType) 
{
  var $el = yo`
  <div class="card">
  
    <div class="card-category">
      ${
          objNew.categories.map( cat => yo`<span class="halfway-fab waves-effect waves-light red new badge" data-badge-caption="${l.msg(cat)}"></span>`)
      }
    </div>

    <div class="card-image">
      <img src="${objNew.banner}">
    </div>
    
    <div class="card-content">
      <span class="card-title grey-text text-darken-4">${l.msg(objNew.title[localStorage.locale])}</span>
      <p class="grey-text text-darken-3">${l.msg(objNew.description[localStorage.locale])}</p>
    </div>

    <div class="card-action grey-text text-darken-1">
        ${objNew.type.toUpperCase()} - ${l.date.format(objNew.updatedAt)}
        <a class="right" href="${objNew.url[localStorage.locale]}">${l.msg('Leer más')}</a>
    </div>

  </div>`;
  
  return $el;
}