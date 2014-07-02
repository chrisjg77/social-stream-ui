define(function (require) {
  var app = require('app')
    , Marionette = require('marionette')
    , conf = require('conf')
    , _ = require('underscore')
    ;

  require('plugins/streamLayout');

  var StreamView = Marionette.ItemView.extend({
    template: require('hbs!stream'),

    // Load configuration file.
    templateHelpers: function() {
      return {
        conf:conf,
        stream: this.stream
      }
    },

    ui: {
      header: 'h1'
    },

    events: {
      // ...
    },

    initialize: function (options) {
      if (location.pathname === '/') {
        this.stream = 'all';
      }
      else {
        this.stream = 'user';
      }
    },

    onDomRefresh: function() {
      app.streamLayout.init('.stream-item');
    }

  });

  return StreamView;

});
