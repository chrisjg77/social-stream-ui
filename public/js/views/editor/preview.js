define(function (require) {
  var app = require('app')
    , Marionette = require('marionette')
    , conf = require('conf')
    , _ = require('underscore')
    ;

  var PreviewView = Marionette.ItemView.extend({
    className: 'preview clearfix',
    template: require('hbs!preview'),

    // Load configuration file.
    templateHelpers: {'conf':conf}

  });

  return PreviewView;

});
