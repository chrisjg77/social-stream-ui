$(function() {

  setTimeout(function() {
    $('body').fadeIn(500);
  },450);

  setTimeout(function() {
    $('.stream-grid-block').each(function(i) {
      var self = $(this);

      setTimeout(function() {
        self.show().addClass('fadeIn');
      },85*i);

      // $(this).delay(85*i).animate({'opacity':1},300);
    });
  },750);
});
