var $ = require('jquery');
var store = require('store2'), activeKey = "dar-invitation-active";


function invitationMouseover() {
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

}

function invitationMouseout() {
	var e = $(this), attr = e.attr('data-invitation');

	if ( typeof attr !== "undefined" && attr ) {

		$( '#invitation' ).find('h5').removeClass('on').addClass('off').text('');

	}

}

function invitationHandlers( active ) {

	if ( typeof active == "undefined" ) {

		store.set(activeKey, true);

	} else {

		store.set(activeKey, active);

	}

	if ( active  ) {

		$( '#invitation-button' ).addClass('active');

		$( '.internal' )
			.on( 'mouseover', invitationMouseover )
			.on('mouseout', invitationMouseout );

	} else {	

		$( '#invitation-button' ).removeClass('active');

		$( '.internal' )
			.off('mouseover').off('mouseout');
			//.off( 'mouseover', invitationMouseover )
			//.off( 'mouseout', invitationMouseout );

	}

}


$('#invitation-button').on('click', function() { invitationHandlers( !store.get( activeKey ) ); });

invitationHandlers( store.get( activeKey ) );