define(function (require) {
  var app = require('app')
    , Marionette = require('marionette')
    , conf = require('conf')
    , data = require('data')
    , _ = require('underscore')
    ;

  require('plugins/streamLayout');

  var StreamView = Marionette.ItemView.extend({
    className: 'clearfix',
    template: require('hbs!stream'),

    // Load configuration file.
    templateHelpers: function() {
      return {
        conf: conf,
        data: data
      }
    },

    onDomRefresh: function () {
      app.streamLayout.init('.stream-post');
    }

  });

  return StreamView;

});
