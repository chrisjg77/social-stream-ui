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
      if (!(app.page.currentView instanceof StreamView)) {
        app.page.show(new StreamView());
      }
      $('body').removeClass('overlayed');
      app.overlay.reset();
    },
    showLogin: function() {
      app.overlay.show(new LoginView());
    },
    showProfilePage: function() {
      app.page.show(new ProfileView());
    },
    showStreamPage: function() {
      if (app.page.currentView != StreamView) {
        app.page.show(new StreamView());
      }
    },
    showThoughtPage: function() {
      app.overlay.show(new ThoughtView());
      $('body').addClass('overlayed');
    }
  });

  return new MyController();
});

