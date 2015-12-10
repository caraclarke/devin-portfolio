$(function(){

  $('.navbar-toggle').on('click',function(e){
      $('.container-fluid').toggleClass('open');
      $('nav div.container').toggleClass('nav-height');
  });

});
