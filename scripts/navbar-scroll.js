$(document).ready(function(){
    $(window).scroll(function() {
        var scroll = $(window).scrollTop();

        if (scroll >= 400) {
            $(".navbar-fixed-top").removeClass('clear-nav').addClass('dark-nav');
        } else {
            $(".navbar-fixed-top").addClass('clear-nav').addClass('dark-nav');
        }
    });
});