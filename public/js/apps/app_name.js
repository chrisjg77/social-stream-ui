define(function (require) {
  var app = require('app')
    , Marionette = require('marionette')
    , ActionsView = require('views/actions')
    , EditorView = require('views/editor')
    , StreamView = require('views/stream')
    , MyController = require('controllers/controller')
    , MyRouter
    ;

  // App-level plugins.
  require('plugins/handlebars');

  // Add app-level regions.
  app.addRegions({
    actions: '[data-region=app-actions]',
    editor: '[data-region=app-editor]',
    stream: '[data-region=app-stream]'
  });

  // Show views in regions.
  app.actions.show(new ActionsView());
  app.editor.show(new EditorView());
  app.stream.show(new StreamView());

  // Return modified app.
  return app;
});
