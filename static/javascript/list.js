var $ = require('jquery');
var offsetScales = require('./options').listOffsets;

if ( $(document.body).hasClass('page-list') ) {

	$('a.internal').not('.content-link').on('click', function( event ) {
		if ( !$( this ).hasClass('active') ) {

			event.preventDefault();

			var href = $(this).attr('href');

			$('a.internal').not('a.internal[href=\"'+ href +'\"]').not('.content-link').removeClass('active');

			$('a.internal[href=\"'+ href +'\"]').addClass('active');

		} 

	});

	$(document).on('mousewheel', function( event ) {
		//event.preventDefault();

		var dY = -event.originalEvent.deltaY;

		var translateTopics = dY * offsetScales.topics - dY;
		var translateContent = dY * offsetScales.content - dY;

		if ( $('#list-topics').position().top + offsetScales.topics * dY < 0 ) {

			$('#list-topics').css({
				top: $('#list-topics').position().top + translateTopics + "px"
			});

			$('#list-content').css({
				top: $('#list-content').position().top + translateContent + "px"
			});

		}


	});

}