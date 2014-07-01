define(function (require) {
  var app = require('app')
    , Marionette = require('marionette')
    , conf = require('conf')
    , _ = require('underscore')
    ;

  var ActionsView = Marionette.ItemView.extend({
    className: 'actions clearfix',
    template: require('hbs!actions'),

    // Load configuration file.
    templateHelpers: function() {
      return {
        conf: conf,
        action: this.action
      }
    },

    ui: {
      addItem: '#add-item',
      cancelItem: '#cancel-item',
      toolbarLeft: '.toolbar .break-left',
      toolbarRight: '.toolbar .break-right',
      toolbarDefault: '.toolbar-default',
      toolbarEditor: '.toolbar-editor'
    },

    events: {
      'click @ui.addItem': 'triggerEditor',
      'click @ui.cancelItem': 'cancelItem'
    },

    initialize: function (options) {
      this.action = 'default';
      this.listenTo(app,'add:item',this.triggerEditor);
    },

    onDomRefresh: function() {
    },

    triggerEditor: function() {
      var top = this.$el.offset().top;
      $('body,html').animate({'scrollTop':top}, 275, function() {
        app.trigger('editor:open');
      });

      this.action = 'editor';
      this.changeToolbar();
    },

    cancelItem: function() {
      app.trigger('editor:close');
      this.action = 'default';

      this.changeToolbar();
    },

    changeToolbar: function() {
      var self = this;
      this.ui.toolbarLeft.addClass('animated bounceOutLeft');
      this.ui.toolbarRight.addClass('animated bounceOutRight');
      setTimeout(function() {
        self.render();
      },475);
    },

    onDestroy: function() {
      // $(window).off('scroll', this.stickyActionsBar);
    }



  });

  return ActionsView;

});
