define(function (require) {
  var app = require('app')
    , Marionette = require('marionette')
    , conf = require('conf')
    , _ = require('underscore')
    ;

  var LoginView = Marionette.ItemView.extend({
    className: 'overlay',
    template: require('hbs!login'),

    // Load configuration file.
    templateHelpers: {'conf':conf},

    ui: {
      cancel: '#cancel-login',
      left: '.break-left'
    },

    events: {
      'click @ui.cancel': 'onClickCancel'
    },

    initialize: function (options) {
    },

    onDomRefresh: function() {
    },

    onClickCancel: function() {
      this.destroy();
    },

    onBeforeDestroy: function() {
      this.ui.left.addClass('animated bounceOutLeft');
      // app.router.navigate('/',true);
      window.history.back();
    }

  });

  return LoginView;

});
