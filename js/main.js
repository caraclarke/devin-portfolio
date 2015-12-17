$(document).ready(function() {
    $('.slideshow-section').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        dots: true,
        speed: 300,
        centerMode: true,
        arrows: true,
        cssEase: 'ease',
        initialSlide: 2,
        respondTo: 'min',
        swipeToSlide: true,
        variableWidth: true
    });

    (function() {
        setTimeout(function() {$('#intro-video').css('display', 'none')}, 4100);
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
});
