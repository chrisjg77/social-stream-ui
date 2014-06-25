$(function() {

  $('.stream').isotope({
    itemSelector: '.stream-item'
  })

  $('.stream-add').on('click',function() {

    var scroll_to = $('.stream-add').offset().top - 100;
    $('body,html').animate({'scrollTop':scroll_to},375,function() {
      $('body').addClass('authoring');
    });

  });


});
