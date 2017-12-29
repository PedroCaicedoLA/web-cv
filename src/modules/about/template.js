var yo = require('yo-yo');
var main = require('../../common/main');
var l = require('../../utils/translate');

module.exports = function () 
{
  var $el = yo`
  <div class="container about grey-text text-darken-3">
    
    <div class="row">
      <div class="col s12">
        <h3>${l.msg('Acerca de')}</h3>
        ${eval(`yo\`
          <p>
            ${l.msg('<b>PCaicedo</b> es una página web que nace de la necesidad de compartir los conocimientos y experiencias en el ambito profesional y cotidiano. El contenido de la página principalmente está enfocado al desarrollo de software, aunque también encontrarás algunos datos y concejos útiles de la cotidianidad. A continuación lo invitamos a que conozca un poco más.')}
          </p>
        \``)}
      </div>
    </div>

    <div class="row">
      <div class="col s12 m6 l4">

        <div class="card hovercard">

          <div class="cardheader" style="background: url(/img/backgroundAbout.png); background-size: cover;">
          </div>

          <div class="avatar">
              <img alt="${l.msg('Pedro Caicedo - Desarrollador de Software')}" src="${pc.img}" height="100" width="100">
          </div>

          <div class="info">
            
            <div class="title">
              ${pc.name}
            </div>
            
            <div class="desc">${l.msg('Desarrollador de Software')}</div>
            
            <div class="desc">
              <a  style="font-size: 0.8rem;" class="waves-effect waves-light btn btn-small light-green darken-4" href="${pc.cvURL}" target="_black">
                <i style="font-size: 1rem;" class="fa fa-id-card"></i>
                ${l.msg('Hoja de Vida')}
              </a>
            </div>
          </div>

          <div class="bottom">
            ${
              pc.socialNetworks.map(network =>{
                return yo`
                <a class="grey-text text-darken-3" href="${network.url}" target="_black">
                  <i class="fa ${network.classIcon}" aria-hidden="true"></i>
                </a>`
              })
            }
          </div>

        </div>
      </div>

      <div class="col s12 m6 l4">
        <h5>${l.msg('Reseña')}</h5>
        ${eval(`yo\`
          <p>
            ${l.msg('Innovador por naturaleza, desarrollador de software de profesión y futbolista de corazón. Apasionado por la tecnología con más de 5 años de experiencia en el desarrollo de software, involucrado en desarrollos web, móviles, y de escritorio. Formado en la <a href="http://campusvirtual.ucv.ve/" target="_black">UCV</a> y miembro del grupo de desarrollo <a href="https://cuado.co" target="_black">Cuado</a>. En aprendizaje constante desde internet (<a href="https://platzi.com/r/caicedo1089/" target="_black">Platzi</a>), buscando nuevas oportunidades de crecimiento profesional y personal.')}
          </p>
        \``)}
          
      </div>

      <div class="col s12 m12 l4">
        <h5>${l.msg('Intereses')}</h5>
        ${eval(`yo\`
          <p>
            ${l.msg('Desde mi niñez las ciencias me han interesado, el saber como funcionan los objetos o sistemas, conocer el por qué de su funcionamiento; eran preguntas muy usuales que no he dejado de hacer desde entonces. Al encender mi primera computadora surgieron muchas preguntas que he tratado de responder con la ayuda de la academia, grupos de desarrollo e internet. Todas las áreas donde se ve involucrado un sistema de cómputo son interesantes, pero en la actualidad estoy enfocado en el desarrollo web y móvil.')}
          </p>
        \``)}
      </div>

    </div>
  
    <div class="row">
      <div class="col s12">

        <h4>${l.msg('¿Deseas contactarme?')}</h4>
        ${eval(`yo\`
          <p>
          ${l.msg('Puedes escribirme directamente al <a href="mailto:info@pcaicedo.com">info@pcaicedo.com</a> o a través de mis redes sociales.')}
          </p>
        \``)}
        
        <!--
        <form class="col s12 card-panel" style="padding: 20px;">

          <div class="row">
            <div class="input-field col s6">
              <input id="name" type="text" class="validate" required>
              <label for="name">Nombre</label>
            </div>
            <div class="input-field col s6">
              <input id="email" type="email" class="validate" email required>
              <label for="email">Correo electrónico</label>
            </div>
          </div>

          <div class="row">
            <div class="input-field col s12">
              <select>
                <option value="" disabled selected>Seleccione un asunto</option>
                <option value="1">Consultoría</option>
                <option value="2">Soporte</option>
                <option value="3">Invitación</option>
                <option value="3">Otros</option>
              </select>
              <label>Asunto</label>
            </div>
          </div>

          <div class="row">
            <div class="input-field col s12">
              <textarea id="comment" class="materialize-textarea" data-length="120"></textarea>
              <label for="comment">Comentario</label>
            </div>
          </div>

          <div class="row center">
            <button class="btn waves-effect waves-light" type="submit" name="action">Enviar Mensaje
              <i class="fa fa-paper-plane" aria-hidden="true"></i>
            </button>
          </div>
        </form>
        -->
      </div>
    </div>

  </div>`;

  return main($el);
}

