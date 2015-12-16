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

    function stopAnimation() {
        setTimeout(function() {
        $('figure').css("-webkit-animation", "none");
        $('figure').css("-moz-animation", "none");
        $('figure').css("-ms-animation", "none");
        $('figure').css("animation", "none");
        $('figure').css("display", "none");
        }, 5000);
        setTimeout(function() {
            $('#picture-anim').css("display", "none");
        }, 7000);
    }

    stopAnimation();

    $("#picture-anim").click(function() {
        var el = $(this),
        newone = el.clone(true);

        el.before(newone);

        $("." + el.attr("class") + ":last").remove();
    });

});
