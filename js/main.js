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
});
