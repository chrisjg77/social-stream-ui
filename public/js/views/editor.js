define(function (require) {
  var app = require('app')
    , Marionette = require('marionette')
    , conf = require('conf')
    , _ = require('underscore')
    , PreviewView = require('views/editor/preview')
    ;

  var EditorView = Marionette.LayoutView.extend({
    className: 'editor clearfix',
    template: require('hbs!editor'),

    // Load configuration file.
    templateHelpers: {'conf':conf},

    regions: {
      preview: '[data-region=editor-preview]'
    },

    initialize: function (options) {
      var self = this;
      app.on('editor:open', this.openEditor);
      app.on('editor:close', this.closeEditor);
    },

    onRender: function() {
      app.preview.show(new PreviewView());
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
