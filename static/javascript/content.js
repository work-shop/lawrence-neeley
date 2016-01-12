var jQuery = require( 'jquery' );
var $ = jQuery;

$('.content-images')
	.on('click', function() {

		$('.content-body').removeClass('active');
		$('.content-images').addClass('active');

	});

$('.content-body')
	.on('click', function() {

		$('.content-images').removeClass('active');
		$('.content-body').addClass('active');

	});