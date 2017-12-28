var yo = require('yo-yo');
var l = require('../../utils/translate');
var empty = require('empty-element');

function menu(withIcon)
{
  return pc.pages.map(
    page => {
      let result = ''
      if(page.type == 'menu')
      {
        result = yo`
        <li class="${page.url[localStorage.locale]==pc.active.url? 'active' : ''}">
          <a href="${page.url[localStorage.locale]}" >
            ${ withIcon && page.name == 'Inicio'? 
                yo`<i class="fa fa-home" aria-hidden="true"></i>` 
                : 
                l.msg(page.name)
            }
          </a>
        </li>`
      }
      return result
    }
  )
}

function lang(locale) 
{
  if(locale != localStorage.locale)
  {
    localStorage.locale = locale;
    location.reload();
  }
  return false;
}

module.exports = function header (ctx, next) 
{
  //Se actualiza la url
  pc.active.url = ctx.path;
  
  let $dropdown = yo`
  <ul id="dropdownLang" class="dropdown-content">
    <li class="${localStorage.locale=='es'? 'active' : ''}">
      <a href="#" onclick=${lang.bind(null, 'es')}>${l.msg('Español')}</a>
    </li>
    <li class="divider"></li>
    <li class="${localStorage.locale=='en'? 'active' : ''}">
      <a href="#" onclick=${lang.bind(null, 'en')}>${l.msg('English')}</a>
    </li>
  </ul>`;

  var $el = yo`
  <nav class="header">
    <div class="nav-wrapper">
      <div class="container">
        <a href="#!" class="brand-logo">
          <img src="${pc.getIMG('logoHeader.png')}"/>
        </a>

        <a href="#" data-target="nav-mobile" class="sidenav-trigger">
          <i class="fa fa-bars fa-2x" aria-hidden="true"></i>
        </a>
        
        <!-- Dropdown el Idioma -->
        <a href="#" class= "dropdown-trigger right" style="color:#5f5f5f;" data-target="dropdownLang">
          ${localStorage.locale.toUpperCase()} <i class="fa fa-globe" aria-hidden="true"></i>
        </a>
        
        <!-- Menú Desktop -->
        <ul class="right hide-on-med-and-down">
          ${menu(true)}
        </ul>

        <!-- Menú Mobile -->
        <ul class="sidenav" id="nav-mobile">
          
          <li class="logo-mobile center">
            <a href="/">
              <img src="${pc.getIMG('logoHeaderMobile.png')}"/>
            </a>
          </li>
          
          ${menu()}
        </ul>
      </div>
    </div>
  </nav>`;

  var container = document.getElementById('header-container')
  empty(container).appendChild($dropdown)
  container.appendChild($el);

  $('.dropdown-trigger').dropdown();
  $('.sidenav').sidenav();
  
  next();
}