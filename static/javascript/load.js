var $ = require('jquery');

var delay = require('./options').delay;


$(document).on('dom-is-sized', function() {

	$('#overlay').fadeOut( delay );

});