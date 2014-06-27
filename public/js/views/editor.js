define(function (require) {
  var app = require('app')
    , Marionette = require('marionette')
    , conf = require('conf')
    , _ = require('underscore')
    , UploadView = require('views/editor/upload')
    , ToolsView = require('views/editor/tools')
    ;

  var EditorView = Marionette.LayoutView.extend({
    className: 'editor clearfix',
    template: require('hbs!editor'),

    // Load configuration file.
    templateHelpers: {'conf':conf},

    regions: {
      editorArea: '[data-region=editor-area]'
    },

    initialize: function (options) {
      var self = this;

      this.listenTo(app, 'editor:open', this.openEditor);
      this.listenTo(app, 'editor:close', this.closeEditor);
      this.listenTo(app, 'editor:showTools', this.showTools);
    },

    openEditor: function() {
      var self = this;
      $('body').addClass('editing');
      setTimeout(function() {
        self.editorArea.show(new UploadView());
      },275);
    },

    showTools: function() {
      var self = this;
      this.editorArea.destroy(new UploadView());
      setTimeout(function() {
        self.editorArea.show(new ToolsView());
      },475);
    },

    closeEditor: function() {
      var self = this;
      this.editorArea.destroy(new UploadView());

      setTimeout(function() {
        $('body').removeClass('editing');
      },275);
    }

  });

  return EditorView;

});
