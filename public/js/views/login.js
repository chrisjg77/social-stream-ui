define(function (require) {
  var app = require('app')
    , Marionette = require('marionette')
    , conf = require('conf')
    , _ = require('underscore')
    ;

  var LoginView = Marionette.ItemView.extend({
    className: 'overlay animated fadeIn',
    template: require('hbs!login'),

    // Load configuration file.
    templateHelpers: {'conf':conf},

    ui: {
      cancel: '#cancel-login',
      left: '.break-left',
      right: '.break-right'
    },

    events: {
      'click @ui.cancel': 'onClickCancel'
    },

    initialize: function (options) {
    },

    onDomRefresh: function() {
    },

    onClickCancel: function() {
      var self = this;
      this.$el.addClass('animated fadeOut');
      this.ui.left.addClass('animated bounceOutLeft');
      this.ui.right.addClass('animated bounceOutRight');
      setTimeout(function() {
        self.destroy();
      },375);
    },

    onBeforeDestroy: function() {
      // app.router.navigate('/',true);
      window.history.back();
    }

  });

  return LoginView;

});
