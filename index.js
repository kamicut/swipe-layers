require('mapbox.js');

module.exports = function Swiper(documentId, opts) {
	'use strict';
	if (!(this instanceof Swiper)) return new Swiper(documentId, opts);

	L.mapbox.accessToken = 'pk.eyJ1Ijoia2FtaWN1dCIsImEiOiJMVzF2NThZIn0.WO0ArcIIzYVioen3HpfugQ';
	var map = L.mapbox.map(documentId);
	L.mapbox.tileLayer(opts.original).addTo(map);

	var overlay = L.mapbox.tileLayer(opts.overlay).addTo(map);
	var range = document.getElementById('range');

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