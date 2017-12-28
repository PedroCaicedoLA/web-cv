var yo = require('yo-yo');
var l = require('../../utils/translate');
var $el = yo`
  <footer class="page-footer grey lighten-3">
    <div class="container">
      <div class="row">
        <div class="col l6 s12">
          <div class="row valign-wrapper">
            <div class="col s3 center">
              <img src="${pc.img}" height="80px" alt="" class="circle">
            </div>
            <div class="col s9">
              <h5 class="grey-text text-darken-4" style="margin-bottom:0px;">
                ${pc.name}
              </h5>
              <div style="margin-bottom:3px;"><a class="grey-text text-darken-3">${l.msg('Desarrollador de Software')}</a></div>
              <div style="margin-bottom:3px;">
                ${
                  pc.socialNetworks.map(network =>{
                    return yo`
                    <a class="grey-text text-darken-3" href="${network.url}" target="_black">
                      <i class="fa ${network.classIcon}" aria-hidden="true"></i>
                    </a>`
                  })
                }
              </div>
              <div>
                <a href="${pc.cvURL}" target="_black" class="waves-effect waves-light btn btn-small light-green darken-4" style="font-size: 0.8rem;">
                  <i class="fa fa-id-card fa-lg left" aria-hidden="true"></i>${l.msg('Hoja de Vida')}
                </a>
              </div>
            </div>
          </div>
          <p class="grey-text text-darken-3">
            ${l.msg('Innovador por naturaleza, desarrollador de software de profesión y futbolista de corazón. Apasionado por la tecnología con más de 5 años de experiencia en el desarrollo de software, involucrado en desarrollos web, móviles, y de escritorio.')}
          </p>
        </div>
        <div class="col l4 offset-l2 s12">
          <h5 class="grey-text text-darken-4">${l.msg('Páginas')}</h5>
          <ul>
            ${
              pc.pages.map(
                page => {
                  let result = ''
                  if(page.type == 'menu')
                  {
                    result = yo`
                    <li>
                      <a class="grey-text text-darken-3" href="${page.url[localStorage.locale]}" >
                        ${l.msg(page.name)}
                      </a>
                    </li>`
                  }
                  return result
                }
              )
            }
          </ul>
        </div>
      </div>
    </div>
    <div class="footer-copyright grey lighten-2">
      <div class="container grey-text text-darken-3">
        <a class="" class="left"><img src="${pc.getIMG('logoFooter.png')}" height="22px" style="margin-right:5px;"/></a>
        <a class="grey-text text-darken-3 center" href="#!">v${pc.version}</a>
        <a class="grey-text text-darken-3 right" href="#!">${l.msg('Terminos y Condiciones')}</a>
      </div>
    </div>
  </footer>
  `;

document.body.appendChild($el);