var $ = require('jquery');
var statementOffset = require('./options').statement.offset;

function positionStatementCaption() {
	$('#home .statement-link').parent('span').find('.statement-caption')
		.each( function() {

			var subtract = $('nav').offset( ).top - $(this).parent('span').offset().top;

			$(this).css({
				top: $('nav').height() + subtract + statementOffset
			});

		});
}

$(document).on('dom-is-sized', function() {

	$('#home > nav')
		.addClass('horizontal-center')
		.removeClass('vertical-offscreen')
		.addClass('vertical-center');

	positionStatementCaption();

});

$(window).on( 'resize', positionStatementCaption);



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