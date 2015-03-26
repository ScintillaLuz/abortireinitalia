$( document ).ready(function() {

	$('section').on('click', '.next', function(){
   		moveToNextSection(event);
   	});

});

function moveToNextSection(event){
	event.preventDefault();
	var currentSection = event.currentTarget;
	var nextSectionId = $(currentSection).find('.next').attr('href');

	$(currentSection).closest('section').hide();
	$('#' + nextSectionId).show();
}