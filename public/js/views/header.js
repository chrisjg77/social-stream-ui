define(function (require) {
  var app = require('app')
    , Marionette = require('marionette')
    , conf = require('conf')
    , _ = require('underscore')
    ;

  require('plugins/streamLayout');

  var HeaderView = Marionette.ItemView.extend({
    className: 'animated fadeIn clearfix',
    template: require('hbs!header'),

    // Load configuration file.
    templateHelpers: {'conf':conf},

    ui: {
      addItem: '#add-item'
    },

    events: {
      'click @ui.addItem': 'onClickAddItem'
    },

    onClickAddItem: function() {
      app.trigger('add:item');
    }

  });

  return HeaderView;

});
