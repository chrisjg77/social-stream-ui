define(function (require) {
  var app = require('app')
    , Marionette = require('marionette')
    , conf = require('conf')
    , _ = require('underscore')
    ;

  require('plugins/parallax');
  require('plugins/streamLayout');

  var StreamView = Marionette.ItemView.extend({
    className: 'profile clearfix',
    template: require('hbs!profile'),

    // Load configuration file.
    templateHelpers: {'conf':conf},

    ui: {
      follow: '#follow-user'
    },

    events: {
      'click @ui.follow': 'onFollowClick',
      'click @ui.unfollow': 'onUnfollowClick'
    },

    initialize: function (options) {
    },

    onDomRefresh: function() {

      // @todo - get this to work.
      app.parallax.init();
      app.streamLayout.init('.stream-collection');
    },

    onFollowClick: function() {
      this.ui.follow.addClass('btn-emphasis').text('Following');
    }

  });

  return StreamView;

});
