define(function (require) {
  var app = require('app')
    , Marionette = require('marionette')
    , StreamView = require('views/stream')
    , PostView = require('views/post')
    , $body = $('body')
    ;

  var MyController = Marionette.Controller.extend({
    showHome: function() {
      if (!(app.page.currentView instanceof StreamView)) {
        app.page.show(new StreamView());
      }
    },
    showPost: function(id) {
      $body.addClass('mode-post');
      console.log(id);
      app.overlay.show(new PostView());
    }
  });

  return new MyController();
});

