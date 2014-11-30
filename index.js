// Code for swiping between layers from Mapbox Examples
// https://www.mapbox.com/mapbox.js/example/v1.0.0/swipe-layers/
//
require('mapbox.js');
var extend = require('extend')

module.exports = function Swiper(documentId, opts) {
	'use strict';
	if (!(this instanceof Swiper)) return new Swiper(documentId, opts);

	var element = document.querySelector(documentId)

	//Default options
	var defaults = {
		left: 'examples.map-i87786ca', 
		right: 'examples.map-i875mjb7',
		centroid: [49.434,-123.272],
		zoom: 7,
		zoomControl: true
	}
	opts = extend(defaults, opts || {});

	L.mapbox.accessToken = 'pk.eyJ1Ijoia2FtaWN1dCIsImEiOiJMVzF2NThZIn0.WO0ArcIIzYVioen3HpfugQ';
	var map = L.mapbox.map(element.querySelector('.swipe-layers-map'));
	L.mapbox.tileLayer(opts.left).addTo(map);

	var overlay = L.mapbox.tileLayer(opts.right).addTo(map);
	var range = element.querySelector('.swipe-layers-range')

	function clip() {
	  var nw = map.containerPointToLayerPoint([0, 0]),
	      se = map.containerPointToLayerPoint(map.getSize()),
	      clipX = nw.x + (se.x - nw.x) * range.value;

	  overlay.getContainer().style.clip = 'rect(' + [nw.y, clipX, se.y, nw.x].join('px,') + 'px)';
	}

	range['oninput' in range ? 'oninput' : 'onchange'] = clip;
	map.on('move', clip);
	map.setView(opts.centroid, opts.zoom);

	//Disable zoom control
	if (typeof opts.zoomControl !== 'undefined' && !opts.zoomControl) {
		map.touchZoom.disable();
		map.doubleClickZoom.disable();
		map.scrollWheelZoom.disable();
		map.boxZoom.disable();
		map.keyboard.disable();
		document.querySelector('.leaflet-control-zoom').style['visibility'] = 'hidden'
	}

	clip();
}