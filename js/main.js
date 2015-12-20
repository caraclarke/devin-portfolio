$(document).ready(function() {

    $('#fullpage').fullpage({
        anchors: ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen'],
        menu: '#myNavbar',
        navigation: true,
        navigationPosition: 'right'
    });

    // $(".main").onepage_scroll({
    //      sectionContainer: "section",
    //      easing: "ease",
    //      animationTime: 1000,
    //      pagination: true,
    //      updateURL: false,
    //      loop: false,
    //      keyboard: true,
    //      responsiveFallback: false,
    //      direction: "vertical"
    //  });

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
});
