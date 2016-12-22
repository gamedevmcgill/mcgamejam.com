$(document).ready(function(){

    $('#map-div').click(function() {
        $('#embedded-map').css("pointer-events", "auto");
        $('#embedded-map').css("-webkit-user-select", "auto");
        $('#embedded-map').css("-moz-user-select", "auto");
        $('#embedded-map').css("-ms-user-select", "auto");
    });
        
    $('#map-div').mouseleave(function() {
        $('#embedded-map').css("pointer-events", "none");
        $('#embedded-map').css("-webkit-user-select", "none");
        $('#embedded-map').css("-moz-user-select", "none");
        $('#embedded-map').css("-ms-user-select", "none");
    });


});