var swiper = require('../../')
var domready = require("domready");
var qs = require('qs');
var modal = require('hut-modal');

domready(function() {
	if (window.location.href.indexOf('?') == -1) {
		window.location.href = window.location.href +
		'?left=examples.map-i87786ca' + 
		'&right=examples.map-i875mjb7' + 
		'&centroid=49.434,-123.272' + 
		'zoom=7'
	}
	var params = qs.parse(window.location.href.slice(window.location.href.indexOf('?') + 1));
	if (params.centroid) {
		params.centroid = params.centroid.split(',');
	}
	if (params.zoomControl) {
		if (params.zoomControl === 'true') params.zoomControl = true;
		else params.zoomControl = false;
	}

	var querySwiper = swiper('#map', params);

	var infoModal = modal(document.querySelector('#modal'));
	document.querySelector('#info').onclick = function() {
		infoModal.show();
	}
})	
