var $ = require('jquery');


$(window).on('dom-is-sized', function() {

	$('#home > nav')
		.addClass('horizontal-center')
		.removeClass('vertical-offscreen')
		.addClass('vertical-center');

});

$('#home .statement-link').on('mouseover', function() {

	$( this ).parent('span').find('.statement-caption')
		.removeClass('off')
		.addClass('on');

});

$('#home .statement-link').on('mouseout', function() {

	$( this ).parent('span').find('.statement-caption')
		.removeClass('on')
		.addClass('off');

});

$( '.internal' )
	.on( 'mouseover', function() {

		$( '#invitation' ).find('h5').text( $(this).data('invitation') ).removeClass('off').addClass('on');

	})
	.on('mouseout', function() {

		$( '#invitation' ).find('h5').removeClass('on').addClass('off').text('');

	});