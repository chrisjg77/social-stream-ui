define(function (require) {
  var app = require('app')
    , Marionette = require('marionette')
    , conf = require('conf')
    , _ = require('underscore')
    ;

  var ToolsView = Marionette.ItemView.extend({
    className: 'editor-tools clearfix',
    template: require('hbs!editor/tools'),

    // Load configuration file.
    templateHelpers: {'conf':conf}

  });

  return ToolsView;

});
