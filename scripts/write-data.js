var ENGLISH
var FRENCH


$(document).ready(function() {
	$.ajaxSetup({ cache: false });
});

$.ajaxSetup({
			cache: false
	});

$.getJSON( "./scripts/languages/english.json"+'?', { cache: false},function() {})
	.done(function( data ) {
		ENGLISH = data;
		})
	.fail( function(d, textStatus, error) {
        console.error("getJSON failed, status: " + textStatus + ", error: "+error)
    })
	.always(function() {
	});

$.getJSON( "./scripts/languages/french.json"+'?', { cache: false},function() {})
	.done(function( data ) {
		FRENCH = data;
		})
	.fail( function(d, textStatus, error) {
        console.error("getJSON failed, status: " + textStatus + ", error: "+error)
    })
	.always(function() {
	});


$('.selecten').click(function(){
	$('#title-tagline').text(ENGLISH.motto);
	
});

$('.selectfr').click(function(){
	$('#title-tagline').text(FRENCH.motto);
});