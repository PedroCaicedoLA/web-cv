if (!window.Intl) 
{
  window.Intl = require('intl');
  require('intl/locale-data/jsonp/en.js');
  require('intl/locale-data/jsonp/es.js');
}

var IntlRelativeFormat = window.IntlRelativeFormat = require('intl-relativeformat');
var IntlMessageFormat = require('intl-messageformat');

require('intl-relativeformat/dist/locale-data/en.js');
require('intl-relativeformat/dist/locale-data/es.js');

var es = require('./es');
var en = require('./en');

var MESSAGES = {
  en: en,
  es: es
};
var locale = localStorage.locale || 'en';
localStorage.locale = locale

module.exports = {
  message: function (text, opts) 
  {
    opts = opts || {};
    var msg = new IntlMessageFormat(MESSAGES[locale][text], locale, null);
    return msg.format(opts); 
  },
  msg: function (text, opts) 
  {
    opts = opts || {};

    if(MESSAGES[locale][text])
    {
      var msg = new IntlMessageFormat(MESSAGES[locale][text], locale, null);
      text = msg.format(opts);
    }

    //console.log('funciona:', text)
    
    return text;
  },
  date: new IntlRelativeFormat(locale)
}
