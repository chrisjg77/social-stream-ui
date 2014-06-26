define(function (require) {
  var app = require('app')
    , Marionette = require('marionette')
    ;

  var MyController = Marionette.Controller.extend({
    initialize: function(options) {
      // ...
    },
    showLanding: function() {
      console.log('landing');
    },
    showAbout: function() {
      console.log('about');
    }
  });

  return new MyController();
});

