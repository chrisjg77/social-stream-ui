define(function (require) {
  var app = require('app')
    , Marionette = require('marionette')
    , conf = require('conf')
    , data = require('data')
    , _ = require('underscore')
    ;

  var FlyoutView = Marionette.ItemView.extend({
    className: 'app-nav',
    tagName: 'nav',
    template: require('hbs!flyout'),

    // Load configuration file.
    templateHelpers: function() {
      return {
        conf: conf,
        data: data
      }
    }

  });

  return FlyoutView;

});
