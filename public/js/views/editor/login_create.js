define(function (require) {
  var app = require('app')
    , Marionette = require('marionette')
    , conf = require('conf')
    , _ = require('underscore')
    ;

  var LoginCreateView = Marionette.ItemView.extend({
    className: 'login wrapper-modal table animated fadeInUp',
    template: require('hbs!editor/login_create'),

    // Load configuration file.
    templateHelpers: {'conf':conf},

    ui: {
      submit: '#submit-login'
    },

    events: {
      'click @ui.submit': 'onLoginSubmit'
    },

    onDomRefresh: function() {

    },

    onLoginSubmit: function (e) {
      this.ui.submit.html('Logging In');
      setTimeout(function() {
        app.trigger('editor:showUpload');
      },500);
      e.preventDefault();
    },

    onBeforeDestroy: function() {
      this.$el.addClass('animated fadeOutDown');
      return false;
    },

    onDestroy: function() {

    }

  });

  return LoginCreateView;

});
