var $ = require('jquery');
var store = require('store2'), passwordKey = "dar-stored-pw-hash";
var crypto = require('crypto-js');

var cacheErrorText = "Something went wrong with the password your browser is storing locally. Let's try again.";
var errorText = "That's not the right password. Try again, if you like.";

$(document).ready( function() {

	if ( !matches( store.get( passwordKey ) ) ) {

		$('#site-gateway').removeClass('hidden');

		var detached = $('#content').children().detach();

		$('#site-gateway-password').on('keyup', ifEnterThen( testPasswordThenInsert( detached ) ));
		$('#site-gateway-submit').on('click', testPasswordThenInsert( detached ) );


	} else {

		$('#site-logout').on('click', flushPasswordStore );
		showLogout();
		removeGateway();

	}

});



function ifEnterThen( continuation ) {
	return function( event ) {
		if ( event.keyCode === 13 ) {
			continuation( event );
		}
	};
}

function testPasswordThenInsert( detached ) {
	return function( event ) {
		var passwordString = $('#site-gateway-password').val();

		if( matches( passwordString ) ) {

			reattach( detached );
			store.set( passwordKey, passwordString );

		} else {

			$('#site-gateway-text').addClass('error').html( errorText );


		}

	};
}

function flushPasswordStore( event ) {

	store.set( passwordKey, false );

}

function reattach( detached ) {

	$('#content').append( detached );
	$(document).trigger('force-resize');
	fadeGateway();

}

function fadeGateway() {
	$('#site-gateway').fadeOut({ complete: function() {
		$('#site-gateway').addClass('hidden');
	}});
}

function removeGateway() {
	$('#site-gateway').remove();
}

function showLogout() {
	$('#site-logout').removeClass('hidden');
}

function hideLogout() {
	$('#site-logout').addClass('hidden');
}

function matches( password ) {
	return crypto.SHA256( password ).toString() === hashed;	
}