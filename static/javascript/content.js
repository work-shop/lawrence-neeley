var jQuery = require( 'jquery' );
var $ = jQuery;

$('.content-images')
	.on('click', function() {

		if ( $('.content-images').hasClass('active') ) {

			$('.content-images').removeClass('active');
			$('.content-images').addClass('focused');

		} else if ( $('.content-images').hasClass('focused') ) {

			$('.content-images').removeClass('focused');
			$('.content-images').addClass('active');

		} else {

			$('.content-body').removeClass('active');
			$('.content-images').addClass('active');

		}

	});

$('.content-body, .content-text')
	.on('click', function() {

		$('.content-images').removeClass('active');
		$('.content-images').removeClass('focused');
		$('.content-body').addClass('active');

	});

