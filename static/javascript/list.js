var $ = require('jquery');
var d3 = require('d3');
var offsetScales = require('./options').listOffsets;

var port = { dispatch: d3.dispatch('networkRepaint') };

if ( $(document.body).hasClass('page-list') ) {

	$('a.internal').not('.content-link').on('click', function( event ) {
		if ( !$( this ).hasClass('active') ) {

			event.preventDefault();

			var href = $(this).attr('href');

			$('a.internal').not('a.internal[href=\"'+ href +'\"]').not('.content-link').removeClass('active');

			$('a.internal').parents('li').removeClass('active');

			$('a.internal[href=\"'+ href +'\"]').addClass('active');

			$('a.internal[href=\"'+ href +'\"]').parents('li').addClass('active');

			port.dispatch.networkRepaint();

		} 

	});

	$(document).on('mousewheel', function( event ) {

		var dY = -event.originalEvent.deltaY;

		var translateTopics = dY * offsetScales.topics - dY;
		var translateContent = dY * offsetScales.content - dY;


		if ( 	$('#list-topics').position().top + translateTopics < 0 && 
			$('footer').offset().top > $(window).scrollTop() + window.innerHeight ) {

			$('#list-topics').css({
				top: $('#list-topics').position().top + translateTopics + "px"
			});

			$('#list-content').css({
				top: $('#list-content').position().top + translateContent + "px"
			});

		}

		port.dispatch.networkRepaint();

	});

}

module.exports = port;