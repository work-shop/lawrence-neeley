var d3 = require('d3');
var radii = require('./options').network.radii;
var port = require('./list');

var dataSourceSelector = ".active[data-network-source]";
var dataTargetSelector = ".active[data-network-targets] article";

var concat = function ( a,b ) { return a.concat( b ); };

var log = function( a ) { console.log( a ); return a; };

//: BoundingClientRect -> {x: Float, y: Float }
/**
 * [centroid description]
 * @param  {[type]} element [description]
 * @return {[type]}         [description]
 */
var centroid = function( rect ) {
	return {
		x : rect.left + rect.width / 2,
		y : rect.top + rect.height / 2
	};
};

var tagAs = function( name ) {
	return function( e ) {
		return {
			tag: name,
			element: e
		};
	};
};


//: d3.selection x d3.selection -> {}
/**
 * [gatherNodePositions description]
 * @param  {[type]} sources [description]
 * @param  {[type]} targets [description]
 * @return {[type]}         [description]
 */
var nodePositions = function( sources, targets ) {

	sources[0] = sources[0].map( tagAs('source') );
	targets[0] = targets[0].map( tagAs('target') );

	return concat( sources, targets ).reduce( concat, [] ).map( function( source ) {
		var rect = source.element.getBoundingClientRect();
		return {
			type: source.tag,
			x: rect.left,
			y: rect.top, 
			width: rect.width,
			height: rect.height,
			centroid: centroid( rect ),
			radius: source.tag === "source" ? radii.source : radii.target
		};
	});
};

var arcTargetSelector = function( sourceSelector ) {
	return '.active[data-network-targets*=\"'+  sourceSelector  +'\"] article';
};

var arcSegments = function( sources ) {

	return sources[0].map( function( source ) {

		var sourceRect = source.getBoundingClientRect();

		var targets = d3.selectAll( arcTargetSelector( d3.select( source ).attr('data-network-source' ) ) );

		return targets[0].map( function( target ) {

			var targetRect = target.getBoundingClientRect();

			return {
				source: {
					centroid : centroid( sourceRect )
				},
				target: {
					centroid : centroid( targetRect )
				}	
			};

		});

	}).reduce( concat, []);


};


var svg = d3.select( 'svg#list-topic-network' );


var arcGroup = svg.append('g').attr('id', 'arc-group');

var nodeGroup = svg.append('g').attr('id', 'node-group');


port.dispatch.on('networkRepaint', function() {

	window.requestAnimationFrame( function() {

		var nodes = nodeGroup.selectAll('.node').data( nodePositions( d3.selectAll( dataSourceSelector ), d3.selectAll( dataTargetSelector ) ) );

		var arcs = arcGroup.selectAll('.arc').data( arcSegments( d3.selectAll( dataSourceSelector ) ) );

		arcs 
			.enter()
				.append('line')
				.classed('arc', true)
				.attr('x1', function(d) { return d.source.centroid.x; })
				.attr('y1', function(d) { return d.source.centroid.y; })
				.attr('x2', function(d) { return d.target.centroid.x; })
				.attr('y2', function(d) { return d.target.centroid.y; });

		arcs
				.attr('x1', function(d) { return d.source.centroid.x; })
				.attr('y1', function(d) { return d.source.centroid.y; })
				.attr('x2', function(d) { return d.target.centroid.x; })
				.attr('y2', function(d) { return d.target.centroid.y; });				

		arcs
			.exit()
				.remove();


		nodes
			.enter()
				.append('circle')
				.classed('node', true)
				.classed('source', function( d ) { return d.type === 'source'; })
				.classed('target', function( d ) { return d.type === 'target';})
				.attr('cx', function(d) { return d.centroid.x; })
				.attr('cy', function(d) { return d.centroid.y; })
				.attr('r', function( d ) { return d.radius; } );

		nodes
				.attr('cx', function(d) { return d.centroid.x; })
				.attr('cy', function(d) { return d.centroid.y; });

		nodes
			.exit()
				.remove();


	});


});















