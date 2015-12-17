var $ = require('jquery');

$( '.internal' )
	.on( 'mouseover', function() {
		var e = $(this), attr = e.attr('data-invitation');

		if ( typeof attr !== "undefined" && attr ) {

			var invitation = $('#invitation');

			invitation.css({

				position:'absolute',
				top: e.offset().top + "px",
				left: e.offset().left + e.width() + 10 + "px"

			});

			invitation.find('h5').text( e.data('invitation') ).removeClass('off').addClass('on');

		}


	})
	.on('mouseout', function() {
		var e = $(this), attr = e.attr('data-invitation');

		if ( typeof attr !== "undefined" && attr ) {

			$( '#invitation' ).find('h5').removeClass('on').addClass('off').text('');

		}

	});