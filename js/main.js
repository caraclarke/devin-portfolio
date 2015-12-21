$(document).ready(function() {

$('.fotorama').fotorama({
    width: 600,
    maxwidth: '100%',
    ratio: 16/9,
    allowfullscreen: true,
    nav: 'thumbs',
    thumbborderwidth: '50%',
    startindex: 3
});

(function() {
    $('#myNavbar').addClass('hidden');
    $('#navbar-eye').addClass('hidden');
    setTimeout(function() {
        $('#intro-video').css('display', 'none');
        $('#myNavbar').removeClass('hidden');
        $('#navbar-eye').removeClass('hidden');
    }, 4100);
}());

$("#navbar-eye-img").on('click', function() {
    $('#intro-video').css('display','block');
    var video = $('#intro-video')[0];
    if (video.paused) {
        video.play();
        setTimeout(function() {$('#intro-video').css('display', 'none')}, 4000);
    }
    else {
        video.pause();
    }
    return false;
});

(function() {
    //actualBlock is the section we are animating
var offset = $(window).scrollTop() - actualBlock.offset().top,
windowHeight = $(window).height();

if( offset >= -windowHeight && offset <= 0 ) {
    // section entering the viewport
    translateY = (-offset)*100/windowHeight;
    scale = 1;
    opacity = 1;
  } else if( offset > 0 && offset <= windowHeight ) {
    //section leaving the viewport
    scale = (1 - ( offset * 0.3/windowHeight));
    opacity = ( 1 - ( offset/windowHeight) );
    translateY = 0;
    boxShadowBlur = 40*(offset/windowHeight);
  }
}());

});
