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


$('#select-en').click(function(){
	$('#title-tagline').text(ENGLISH.motto);
	$('#learn').text(ENGLISH.more);
	$('#parallax-1 h2').text(ENGLISH.what);
	$('#abouttext').text(ENGLISH.description);
	$('#recommend').text(ENGLISH.recommendations);
	$('#parallax-2 h2').text(ENGLISH.preparation);
	$('#prep').text(ENGLISH.software);
	$('#where').text(ENGLISH.actualWhereWhen);
	$('#parallax-3 h2').text(ENGLISH.signup);
	$('#interest').text(ENGLISH.interested);
	$('#footer h4').text(ENGLISH.sponsors);

	
});

$('#select-fr').click(function(){

	$('#title-tagline').text(FRENCH.motto);
	$('#learn').text(FRENCH.more);
	$('#parallax-1 h2').text(FRENCH.what);
	$('#abouttext').text(FRENCH.description);
	$('#recommend').text(FRENCH.recommendations);
	$('#parallax-2 h2').text(FRENCH.preparation);
	$('#prep').text(FRENCH.software);
	$('#where').text(FRENCH.actualWhereWhen);
	$('#parallax-3 h2').text(FRENCH.signup);
	$('#interest').text(FRENCH.interested);
	$('#footer h4').text(FRENCH.sponsors);
});