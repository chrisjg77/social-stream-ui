define(function (require) {
  var app = require('app')
    , Marionette = require('marionette')
    , conf = require('conf')
    , _ = require('underscore')
    ;

  var ThoughtView = Marionette.ItemView.extend({
    className: '',
    template: require('hbs!thought'),

    // Load configuration file.
    templateHelpers: function() {
      return {
        conf:conf
      }
    }

  });

  return ThoughtView;

});
