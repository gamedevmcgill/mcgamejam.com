var ENGLISH
var FRENCH
var langselect

$(document).ready(function() {
	$.ajaxSetup({ cache: false });
		//Big header user sees
		$('#title-tagline').text(ENGLISH.motto);
		$('#learn').text(ENGLISH.more);
		//About
		$('#parallax-1 h2').text(ENGLISH.what);
		$('#abouttext').text(ENGLISH.description);
		//FAQ
		$('#parallax-2 h2').text(ENGLISH.faq);
		//Questions
		$('#q1').text(ENGLISH.questions[0]);
		$('#q2').text(ENGLISH.questions[1]);
		$('#q3').text(ENGLISH.questions[2]);
		$('#q4').text(ENGLISH.questions[3]);
		$('#q5').text(ENGLISH.questions[4]);
		$('#q6').text(ENGLISH.questions[5]);
		$('#q7').text(ENGLISH.questions[6]);
		//Answers
		$('#where').text(ENGLISH.actualWhereWhen);
		$('#who').text(ENGLISH.whocanparticipate);
		$('#prep').text(ENGLISH.software);
		$('#food').text(ENGLISH.food);
		$('#bring').text(ENGLISH.tobring);
		$('#alone').text(ENGLISH.alone);
		$('#submit').text(ENGLISH.submit);
		//Signup
		$('#parallax-3 h2').text(ENGLISH.signup);
		//Tickets
		$('#tickets').text(ENGLISH.tickettitle);
		$('#descripticket').text(ENGLISH.tickets[0]);
		$('#s1').text(ENGLISH.tickets[1]);
		$('#s2').text(ENGLISH.tickets[2]);
		$('#s3').text(ENGLISH.tickets[3]);
		$('#s4').text(ENGLISH.tickets[4]);
		$('#s5').text(ENGLISH.tickets[5]);

		$('#footnote2').text(ENGLISH.footnotes[1]);
		$('#interest').text(ENGLISH.interested);
		$('#footer h4').text(ENGLISH.sponsors);	
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


$('#select-en').click(function($e){
	$e.preventDefault();
	langselect = "EN";
	//Big header user sees
	$('#title-tagline').text(ENGLISH.motto);
	$('#learn').text(ENGLISH.more);
	//About
	$('#parallax-1 h2').text(ENGLISH.what);
	$('#abouttext').text(ENGLISH.description);
	//FAQ
	$('#parallax-2 h2').text(ENGLISH.faq);
	//Questions
	$('#q1').text(ENGLISH.questions[0]);
	$('#q2').text(ENGLISH.questions[1]);
	$('#q3').text(ENGLISH.questions[2]);
	$('#q4').text(ENGLISH.questions[3]);
	$('#q5').text(ENGLISH.questions[4]);
	$('#q6').text(ENGLISH.questions[5]);
	$('#q7').text(ENGLISH.questions[6]);
	//Answers
	$('#where').text(ENGLISH.actualWhereWhen);
	$('#who').text(ENGLISH.whocanparticipate);
	$('#prep').text(ENGLISH.software);
	$('#food').text(ENGLISH.food);
	$('#bring').text(ENGLISH.tobring);
	$('#alone').text(ENGLISH.alone);
	$('#submit').text(ENGLISH.submit);
	//Signup
	$('#parallax-3 h2').text(ENGLISH.signup);
	//Tickets
	$('#tickets').text(ENGLISH.tickettitle);
	$('#descripticket').text(ENGLISH.tickets[0]);
	$('#s1').text(ENGLISH.tickets[1]);
	$('#s2').text(ENGLISH.tickets[2]);
	$('#s3').text(ENGLISH.tickets[3]);
	$('#s4').text(ENGLISH.tickets[4]);
	$('#s5').text(ENGLISH.tickets[5]);
	$('#footnote2').text(ENGLISH.footnotes[1]);
	$('#interest').text(ENGLISH.interested);
	$('#footer h4').text(ENGLISH.sponsors);		

	
});

$('#select-fr').click(function($e){
	$e.preventDefault();
	langselect = "FR";
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