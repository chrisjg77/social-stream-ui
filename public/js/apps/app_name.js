define(function (require) {
  var app = require('app')
    , Marionette = require('marionette')
    , HeaderView = require('views/header')
    , EditorView = require('views/editor')
    , MyController = require('controllers/controller')
    , MyRouter
    ;

  // App-level plugins.
  require('plugins/handlebars');

  // Handle links.
  // @todo - move to plugin.
  $(document).on('click','a',function(e) {
    app.router.navigate($(this).attr('href'),true)
    e.preventDefault();
  });

  // Add app-level regions.
  app.addRegions({
    header: '[data-region=app-header]',
    editor: '[data-region=app-editor]',
    page: '[data-region=app-page]',
    overlay: '[data-region=app-overlay]'
  });

  // Show views in regions.
  app.header.show(new HeaderView());
  app.editor.show(new EditorView());

  // Set up routes
  MyRouter = Marionette.AppRouter.extend({
    appRoutes: {
      '' : 'showHome',
      'login': 'showLogin',
      'profile': 'showProfilePage',
      'profile/stream': 'showStreamPage'
    }
  });

  app.router = new MyRouter({
    controller: MyController
  });

  Backbone.history.start({pushState: true});

  // Return modified app.
  return app;
});
