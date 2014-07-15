define(function (require) {
  var app = require('app')
    , Marionette = require('marionette')
    , conf = require('conf')
    , _ = require('underscore')
    , $body = $('body');
    ;

  var HeaderView = Marionette.ItemView.extend({
    className: 'wrapper-section clearfix',
    template: require('hbs!header'),

    // Load configuration file.
    templateHelpers: function() {
      return {
        conf :conf,
        action: this.action
      }
    },

    ui: {
      addItem: '#add-item',
      login: '#login',
      cancelItem: '#cancel-item',
      toolbarLeft: '.break-left',
      toolbarRight: ' .break-right',
      addToStream: '#add-to-stream',
      openNav: '#open-nav'
    },

    events: {
      'click @ui.addItem': 'triggerEditor',
      'click @ui.login': 'triggerEditor',
      'click @ui.cancelItem': 'cancelItem',
      'click @ui.addToStream': 'goToStreams',
      'click @ui.openNav': 'openNav'
    },

    initialize: function (options) {
      this.action = 'default';
    },

    onDomRefresh: function() {
    },

    triggerEditor: function() {
    },

    cancelItem: function() {

    },

    changeToolbar: function() {

    },

    showTools: function() {
    },

    openNav: function() {
      app.trigger('flyout:open');
    },

    onDestroy: function() {
    }

  });

  return HeaderView;

});
