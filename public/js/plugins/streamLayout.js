define(function (require) {
  var app = require('app')
    , Isotope = require('isotope')
    ;

  // Namespace.
  app.streamLayout = {};

  app.streamLayout.init = function() {
    var iso = new Isotope( '.stream', {
      itemSelector: '.stream-item'
    });
  }

});
