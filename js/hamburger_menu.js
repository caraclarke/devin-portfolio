$(function(){

  $('.navbar-toggle').on('click',function(e){
      $('.overlay').toggleClass('open');
      $('nav div.container').toggleClass('nav-height');
  });

});
