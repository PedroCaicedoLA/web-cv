var express = require('express');

var app = express();

app.use(express.static('public'));

app.get(
  '*', 
  function (req, res, next) 
  {
    const dataFile = require('fs').readFileSync(`./assets/index.html`, "utf8", function(err, data) { console.log('Error', err) })

    res.send(dataFile);  

  }
);

app.listen(
  3000, 
  function (err) 
  {

    if (err) return console.log('Hubo un error'), process.exit(1);

    console.log('PCaicedo escuchando en el puerto 3000');

  }
)

// Convertir URL a slug -> https://gist.github.com/codeguy/6684588
function string_to_slug (str) 
{
  str = str.replace(/^\s+|\s+$/g, ''); // trim
  str = str.toLowerCase();

  // remove accents, swap ñ for n, etc
  var from = "àáäâèéëêìíïîòóöôùúüûñç·/_,:;";
  var to   = "aaaaeeeeiiiioooouuuunc------";
  for (var i=0, l=from.length ; i<l ; i++) {
      str = str.replace(new RegExp(from.charAt(i), 'g'), to.charAt(i));
  }

  str = str.replace(/[^a-z0-9 -]/g, '') // remove invalid chars
      .replace(/\s+/g, '-') // collapse whitespace and replace by -
      .replace(/-+/g, '-'); // collapse dashes

  return str;
}