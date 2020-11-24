var ENGLISH
var FRENCH
var langselect

$(document).ready(function () {
	$.ajaxSetup({ cache: false });
	//writeEnglish();
});

$.ajaxSetup({
	cache: false
});

$.getJSON("./scripts/languages/english.json" + '?', { cache: false }, function () { })
	.done(function (data) {
		ENGLISH = data;
		writeEnglish();
	})
	.fail(function (d, textStatus, error) {
		console.error("getJSON failed, status: " + textStatus + ", error: " + error)
	})
	.always(function () {
	});

$.getJSON("./scripts/languages/french.json" + '?', { cache: false }, function () { })
	.done(function (data) {
		FRENCH = data;
	})
	.fail(function (d, textStatus, error) {
		console.error("getJSON failed, status: " + textStatus + ", error: " + error)
	})
	.always(function () {
	});


$('#select-en').click(function ($e) {
	$e.preventDefault();
	writeEnglish();
});

$('#select-fr').click(function ($e) {
	$e.preventDefault();
	writeFrench();
});


function writeEnglish() {
	langselect = "EN";
	//Big header user sees
	$('#title-tagline').text(ENGLISH.motto);
	$('#learn').text(ENGLISH.more);
	//About
	$('#parallax-1 h2').text(ENGLISH.what);
	$('#what').text(ENGLISH.what);
	$('#abouttext').text(ENGLISH.description);
	//FAQ
	$('#parallax-2 h2').text(ENGLISH.faq);
	$('#about').text(ENGLISH.about);
	//Questions
	$('#q1').text(ENGLISH.questions[0]);
	$('#q2').text(ENGLISH.questions[1]);
	$('#q3').text(ENGLISH.questions[2]);
	$('#q4').text(ENGLISH.questions[3]);
	$('#q5').text(ENGLISH.questions[4]);
	$('#q6').text(ENGLISH.questions[5]);
	$('#q7').text(ENGLISH.questions[6]);
	$('#q8').text(ENGLISH.questions[7]);
	//Answers
	$('#where').text(ENGLISH.actualWhereWhen);
	$('#who').text(ENGLISH.whocanparticipate);
	$('#prep').text(ENGLISH.software);
	$('#food').text(ENGLISH.food);
	$('#bring').text(ENGLISH.tobring);
	$('#alone').text(ENGLISH.alone);
	$('#teamsize').text(ENGLISH.teamsize);
	$('#submit').text(ENGLISH.submit);
	//Signup
	$('#parallax-3 h2').text(ENGLISH.signup);
	$('#signup').text(ENGLISH.signup);
	$('#signupheader').text(ENGLISH.signup);
	//Tickets
	$('#tickets').text(ENGLISH.tickettitle);
	$('#descripticket').text(ENGLISH.tickets[0]);
	$('#s1').text(ENGLISH.tickets[1]);
	$('#s2').text(ENGLISH.tickets[2]);
	$('#s3').text(ENGLISH.tickets[3]);
	$('#s4').text(ENGLISH.tickets[4]);
	$('#s5').text(ENGLISH.tickets[5]);
	$('#footnote1').text(ENGLISH.footnotes[0]);
	$('#footnote2').text(ENGLISH.footnotes[1]);
	$('#interest').text(ENGLISH.interested);
	$('#footer h4').text(ENGLISH.sponsors);
	$('#signup-button').text(ENGLISH.buyticket);
	$('#ticketswarning').text(ENGLISH.ticketswarning);
	$('#presentedby').text(ENGLISH.presentedby);
}

function writeFrench() {
	langselect = "EN";
	//Big header user sees
	$('#title-tagline').text(FRENCH.motto);
	$('#learn').text(FRENCH.more);
	//About
	$('#parallax-1 h2').text(FRENCH.what);
	$('#what').text(FRENCH.what);
	$('#abouttext').text(FRENCH.description);
	//FAQ
	$('#parallax-2 h2').text(FRENCH.faq);
	$('#about').text(FRENCH.about);
	//Questions
	$('#q1').text(FRENCH.questions[0]);
	$('#q2').text(FRENCH.questions[1]);
	$('#q3').text(FRENCH.questions[2]);
	$('#q4').text(FRENCH.questions[3]);
	$('#q5').text(FRENCH.questions[4]);
	$('#q6').text(FRENCH.questions[5]);
	$('#q7').text(FRENCH.questions[6]);
	$('#q8').text(FRENCH.questions[7]);
	//Answers
	$('#where').text(FRENCH.actualWhereWhen);
	$('#who').text(FRENCH.whocanparticipate);
	$('#prep').text(FRENCH.software);
	$('#food').text(FRENCH.food);
	$('#bring').text(FRENCH.tobring);
	$('#alone').text(FRENCH.alone);
	$('#teamsize').text(FRENCH.teamsize);
	$('#submit').text(FRENCH.submit);
	//Signup
	$('#parallax-3 h2').text(FRENCH.signup);
	$('#signup').text(FRENCH.signup);
	$('#signupheader').text(FRENCH.signup);
	//Tickets
	$('#tickets').text(FRENCH.tickettitle);
	$('#descripticket').text(FRENCH.tickets[0]);
	$('#s1').text(FRENCH.tickets[1]);
	$('#s2').text(FRENCH.tickets[2]);
	$('#s3').text(FRENCH.tickets[3]);
	$('#s4').text(FRENCH.tickets[4]);
	$('#s5').text(FRENCH.tickets[5]);
	$('#footnote1').text(FRENCH.footnotes[0]);
	$('#footnote2').text(FRENCH.footnotes[1]);
	$('#interest').text(FRENCH.interested);
	$('#footer h4').text(FRENCH.sponsors);
	$('#signup-button').text(FRENCH.buyticket);
	$('#ticketswarning').text(FRENCH.ticketswarning);
	$('#presentedby').text(FRENCH.presentedby);
}

