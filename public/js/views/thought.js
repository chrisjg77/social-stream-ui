define(function (require) {
  var app = require('app')
    , Marionette = require('marionette')
    , conf = require('conf')
    , _ = require('underscore')
    ;

  var ThoughtView = Marionette.ItemView.extend({
    className: '',
    template: require('hbs!thought'),

    // Load configuration file.
    templateHelpers: function() {
      return {
        conf:conf
      }
    },

    ui: {
      close: '#close'
    },

    events: {
      'click @ui.close': 'onClickClose'
    },

    initialize: function() {
    },

    onClickClose: function() {
      var path = window.location.pathname;
      var currentRoute = Backbone.history.fragment;

      app.router.navigate($(this).attr(path-currentRoute),true);
    }

  });

  return ThoughtView;

});
