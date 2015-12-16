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
        setTimeout(function() {$('.pic-1').css('display', 'none')}, 3800);
    }());

    function stopAnimation() {
        setTimeout(function() {
        $('figure').css("display", "none");
        }, 5000);
        setTimeout(function() {
            $('#picture-anim').css("display", "none");
        }, 7000);
    }

    stopAnimation();

    $("#navbar-eye-img").on('click', function() {
        console.log('click');
        $('#picture-anim').css('display','block');
        $('figure').css('display','block');
        $('#picture-anim').replaceWith($('#picture-anim'));

       setTimeout(function() {
        $('figure').css("display", "none");
        }, 5000);
        setTimeout(function() {
            $('#picture-anim').css("display", "none");
        }, 7000);

    });

});
