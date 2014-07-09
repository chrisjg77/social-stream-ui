define(function (require) {
  var app = require('app')
    , Marionette = require('marionette')
    , conf = require('conf')
    , _ = require('underscore')
    ;

  require('plugins/streamLayout');

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
      addToStream: '#add-to-stream'
    },

    events: {
      'click @ui.addItem': 'triggerEditor',
      'click @ui.login': 'triggerEditor',
      'click @ui.cancelItem': 'cancelItem',
      'click @ui.addToStream': 'goToStreams'
    },

    initialize: function (options) {
      this.action = 'default';
      this.listenTo(app,'add:item',this.triggerEditor);
      this.listenTo(app, 'editor:showTools', this.showTools);
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

    showTools: function() {
      this.ui.addToStream.show();
    },

    onDestroy: function() {
      // $(window).off('scroll', this.stickyActionsBar);
    }

  });

  return HeaderView;

});
