var swiper = require('../')
var domready = require("domready");
var qs = require('qs');

domready(function() {
	var params = qs.parse(window.location.href.slice(window.location.href.indexOf('?') + 1));
	if (params.centroid) {
		params.centroid = params.centroid.split(',');
	}
	if (params.zoomControl) {
		if (params.zoomControl === 'true') params.zoomControl = true;
		else params.zoomControl = false;
	}
	console.log(params);

	var srinagar = swiper('#map', params);
})	
