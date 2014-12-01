var swiper = require('../../')
var domready = require("domready");

domready(function() {
	var srinagar = swiper('#map', {
		left: 'devseed.SrinagarAfterFC',
		right: 'devseed.SrinagarFCBefore',
		zoom=11,
		centroid=[34.0411824,74.8130321]
	});
})	
