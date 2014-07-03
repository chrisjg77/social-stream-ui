define(function (require) {
  var app = require('app')
    , Marionette = require('marionette')
    , StreamView = require('views/stream')
    , LoginView = require('views/login')
    , ProfileView = require('views/profile')
    , ThoughtView = require('views/thought')
    ;

  var MyController = Marionette.Controller.extend({
    showHome: function() {
      app.page.show(new StreamView());
      app.overlay.reset();
    },
    showLogin: function() {
      app.overlay.show(new LoginView());
    },
    showProfilePage: function() {
      app.page.show(new ProfileView());
    },
    showStreamPage: function() {
      app.page.show(new StreamView());
    },
    showThoughtPage: function() {
      app.page.show(new ThoughtView());
    }
  });

  return new MyController();
});

