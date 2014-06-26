define(function (require) {
  var app = require('app')
    , Marionette = require('marionette')
    , conf = require('conf')
    , _ = require('underscore')
    ;

  var EditorView = Marionette.ItemView.extend({
    className: 'editor clearfix',
    template: require('hbs!editor'),

    // Load configuration file.
    templateHelpers: {'conf':conf},

    ui: {
      header: 'h1'
    },

    events: {
      // ...
    },

    initialize: function (options) {
      var self = this;
      app.on('editor:open', this.openEditor);
      app.on('editor:close', this.closeEditor);
    },

    onDomRefresh: function() {
    },

    openEditor: function() {
      $('body').addClass('editing');
    },

    closeEditor: function() {
      $('body').removeClass('editing');
    }

  });

  return EditorView;

});
