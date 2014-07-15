define(function (require) {
  var app = require('app')
    , Marionette = require('marionette')
    , HeaderView = require('views/header')
    , FlyoutView = require('views/flyout')
    , MyController = require('controllers/controller')
    , MyRouter
    , $body = $('body')
    ;

  // App-level plugins.
  require('plugins/handlebars');

  // Handle links.
  // @todo - move to plugin.
  $(document).on('click','a',function(e) {
    if ( !$(this).hasClass('external') ) {
      app.router.navigate($(this).attr('href'),true);
      e.preventDefault();
    }
  });

  // Add app-level regions.
  app.addRegions({
    header: '[data-region=app-header]',
    editor: '[data-region=app-editor]',
    page: '[data-region=app-page]',
    overlay: '[data-region=app-overlay]',
    flyout: '[data-region=app-flyout]'
  });

  // Show views in regions.
  app.header.show(new HeaderView());

  // Listen for app-wide events
  app.on('flyout:open', function() {
    if ($body.hasClass('mode-nav')) {
      $body.removeClass('mode-nav');
      app.flyout.destroy(new FlyoutView());
    } else {
      $('body').addClass('mode-nav');
      app.flyout.show(new FlyoutView());
    }
  });

  // Set up routes
  MyRouter = Marionette.AppRouter.extend({
    appRoutes: {
      '' : 'showHome',
      'post/:id': 'showPost'
    }
  });

  app.router = new MyRouter({
    controller: MyController
  });

  Backbone.history.start({pushState: true});

  // Return modified app.
  return app;
});
