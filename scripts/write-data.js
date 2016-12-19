var ENGLISH
function writeEnglish(){
	$.getJSON( "./scripts/languages/english.json", function(){})
	.done(function(data){
		ENGLISH=data;
		jAlert(ENGLISH);
	})
	.always(function(){
	})
}