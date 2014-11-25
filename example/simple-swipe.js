var Swiper = require('../')
var domready = require("domready");

domready(function() {
	new Swiper('map', {
		original: 'devseed.SrinagarAfterFC', 
		overlay: 'devseed.SrinagarFCBefore',
		centroid: [34.0411824,74.8130321],
		zoom: 11,
		zoomControl: false
	})	
})	
