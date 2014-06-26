define(function (require) {
  var app = require('app')
    , Marionette = require('marionette')
    , conf = require('conf')
    , _ = require('underscore')
    ;

  require('plugins/streamLayout');

  var StreamView = Marionette.ItemView.extend({
    className: 'stream clearfix animated bounceInUp',
    template: require('hbs!stream'),

    // Load configuration file.
    templateHelpers: {'conf':conf},

    ui: {
      header: 'h1'
    },

    events: {
      // ...
    },

    initialize: function (options) {
      // ...
    },

    onDomRefresh: function() {
      app.streamLayout.init();
    }

  });

  return StreamView;

});
