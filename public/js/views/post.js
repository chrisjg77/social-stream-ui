define(function (require) {
  var app = require('app')
    , Marionette = require('marionette')
    , conf = require('conf')
    , data = require('data')
    , _ = require('underscore')
    ;

  require('plugins/streamLayout');

  var PostView = Marionette.ItemView.extend({
    className: 'clearfix',
    template: require('hbs!post'),

    // Load configuration file.
    templateHelpers: function() {
      return {
        conf: conf,
        data: data,
        post: 3
      }
    },

    onBeforeDestory: function() {
      $('body').removeClass('mode-post');
    }

  });

  return PostView;

});
