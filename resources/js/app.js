$(function() {

  $('.stream').isotope({
    itemSelector: '.stream-item'
  })

  $('#add-thing').on('click',function() {

    var scroll_to = $('.featured').height();

    $('body,html').animate({'scrollTop':scroll_to},375,function() {
      $('body').addClass('editing');
    });

  });


});
