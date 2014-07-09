define(function (require) {
  var app = require('app')
    , Marionette = require('marionette')
    , conf = require('conf')
    , _ = require('underscore')
    ;

  var StreamsView = Marionette.ItemView.extend({
    className: 'editor-upload animated fadeInUp',
    template: require('hbs!editor/streams'),

    // Load configuration file.
    templateHelpers: {'conf':conf}

  });

  return StreamsView;

});
