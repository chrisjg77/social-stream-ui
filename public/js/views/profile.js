define(function (require) {
  var app = require('app')
    , Marionette = require('marionette')
    , conf = require('conf')
    , _ = require('underscore')
    ;

  require('plugins/parallax');

  var StreamView = Marionette.ItemView.extend({
    className: 'profile clearfix',
    template: require('hbs!profile'),

    // Load configuration file.
    templateHelpers: {'conf':conf},

    ui: {
    },

    events: {
      // ...
    },

    initialize: function (options) {
    },

    onDomRefresh: function() {

      // @todo - get this to work.
      app.parallax.init();
    },

    onEdit: function() {
    }

  });

  return StreamView;

});
