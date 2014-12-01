var swiper = require('../../')
var domready = require("domready");
var qs = require('qs');
var modal = require('hut-modal');

domready(function() {
	if (window.location.href.indexOf('?') == -1) {
		window.location.href = window.location.href +
		'?left=devseed.SrinagarAfterFC' + 
		'&right=devseed.SrinagarFCBefore' + 
		'&centroid=34.04,74.81' + 
		'&zoom=11' + 
		'&enableInfo=true'
	}
	var params = qs.parse(window.location.href.slice(window.location.href.indexOf('?') + 1));
	if (params.centroid) {
		params.centroid = params.centroid.split(',');
	}
	if (params.zoomControl) {
		if (params.zoomControl === 'true') params.zoomControl = true;
		else params.zoomControl = false;
	}
	if (params.enableInfo) {
		var button = document.createElement('button')
		button.id = 'info';
		button.innerHTML = '?'
		document.body.appendChild(button)
		console.log('here')
		var infoModal = modal(document.querySelector('#modal'));
		button.onclick = function() {
			infoModal.show();
		}
	}
	var querySwiper = swiper('#map', params);

})	
