var jQuery = require( 'jquery' );
var $ = jQuery;

// $(document).ready( function() {

// 	$('.content-images')
// 		.height( 
// 			Math.max( 
// 				$('.content-image').toArray().map( function( x ) {
					
// 					return $( x ).outerHeight();

// 				}).reduce( function( b, a, i ) {

// 					return i < 2 ? b + a : b;

// 				}, 0 ),
// 				$('.content-header').outerHeight() + $('.content-body').outerHeight()
// 			)
// 		);

// });

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