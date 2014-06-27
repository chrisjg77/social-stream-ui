define(function (require) {
  var app = require('app')
    , Marionette = require('marionette')
    , conf = require('conf')
    , _ = require('underscore')
    ;

  var UploadView = Marionette.ItemView.extend({
    className: 'editor-upload animated fadeInUp',
    template: require('hbs!editor/upload'),

    // Load configuration file.
    templateHelpers: {'conf':conf},

    ui: {
      drop: 'h3'
    },

    events: {
      'click @ui.drop': 'uploadFile'
    },

    onDomRefresh: function() {

    },

    uploadFile: function () {
      console.log('upload');
      app.trigger('editor:showTools');
    },

    onBeforeDestroy: function() {
      this.$el.addClass('animated fadeOutDown');
      return false;
    },

    onDestroy: function() {

    }

  });

  return UploadView;

});
