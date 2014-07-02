define(function (require) {
  var app = require('app')
    , Masonry = require('masonry')
    ;

  // Namespace.
  app.streamLayout = {};

  app.streamLayout.init = function(itemSelector) {
    var m = new Masonry( '.stream', {
      isAnimated: false,
      itemSelector: itemSelector,
      isFitWidth: true
    });
  }

});
