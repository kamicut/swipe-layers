var swiper = require('../')
var domready = require("domready");

domready(function() {
	var srinagar = swiper('map', {
		left: 'devseed.SrinagarAfterFC', 
		right: 'devseed.SrinagarFCBefore',
		centroid: [34.0411824,74.8130321],
		zoom: 11,
		zoomControl: false
	});
})	
