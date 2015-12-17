var jQuery = require( 'jquery' );
var $ = jQuery;

$('.content-images')
	.on('mouseover', function() {

		$('.content-body').removeClass('active');
		$('.content-images').addClass('active');

	});

$('.content-body')
	.on('mouseover', function() {

		$('.content-images').removeClass('active');
		$('.content-body').addClass('active');

	});