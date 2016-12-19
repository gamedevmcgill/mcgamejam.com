$(document).ready(function(){

    //if screen is narrow on document load, load dark navbar
    if ($(window).width() < 768) {
        $(".navbar-fixed-top").removeClass('clear-nav').addClass('dark-nav');
    }

    //toggle between clear and dark navbars depending on screen width
    $(window).resize(function() {
        if ($(window).width() < 768) {
            $(".navbar-fixed-top").removeClass('clear-nav').addClass('dark-nav');
        } else {
            $(".navbar-fixed-top").addClass('clear-nav').addClass('dark-nav');
        }
    });

    //toggle between clear and dark navbars depending on how much you scroll (only for wider screens)
    $(window).scroll(function() {
        var scroll = $(window).scrollTop();

        if (scroll >= 100 || $(window).width() < 768) {
            $(".navbar-fixed-top").removeClass('clear-nav').addClass('dark-nav');
        } else {
            $(".navbar-fixed-top").addClass('clear-nav').addClass('dark-nav');
        }
    });
});