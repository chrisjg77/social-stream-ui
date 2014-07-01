define(function (require) {
  var app = require('app')
    , Marionette = require('marionette')
    , StreamView = require('views/stream')
    , LoginView = require('views/login')
    ;

  var MyController = Marionette.Controller.extend({
    showHome: function() {
      app.page.show(new StreamView());
      app.overlay.reset();
    },
    showLogin: function() {
      app.overlay.show(new LoginView());
    },
    showUserPage: function() {
      console.log('user page');
    },
    showStreamPage: function() {
      console.log('stream page');
    }
  });

  return new MyController();
});

