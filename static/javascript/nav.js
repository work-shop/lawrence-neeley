var $ = require('jquery');

var statementOffset = require('./options').statement.offsetTop;
var statementSlideDuration = require('./options').statement.transitionDuration;
var statementMargin = require('./options').statement.margin;

function positionStatementCaptionTop( element ) {

	var subtract = $('nav').offset( ).top - element.parent('span').offset().top;

	element.css({
		top: $('nav').height() + subtract + statementOffset
	});

}

function positionStatementCaptionLeft( element ) {

	var elementExtents = element.offset().left + element.width() + statementMargin;

	var windowExtents = window.innerWidth;

	var elementPadding = statementMargin - element.offset().left;

	var left = 0;

	if (  elementExtents >= windowExtents ) {

		console.log( "recompute right!" );

		left = windowExtents - elementExtents;

	} else if ( elementPadding > 0 ) {

		console.log( "recompute left !" );

		left = elementPadding;

	} else {

		console.log( "reset!" );

	}


	element.animate({

		left: left

	}, statementSlideDuration);


}

function positionStatementCaption() {
	$('#home .statement-link').parent('span').find('.statement-caption')
		.each( function() {

			positionStatementCaptionTop( $( this ) );
			positionStatementCaptionLeft( $( this ) );

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