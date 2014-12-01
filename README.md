# Swipe Layer tool

Give two Mapbox ids and a lat/lon pair to swipe between them. 

Based on [this guide](https://www.mapbox.com/mapbox.js/example/v1.0.0/swipe-layers/) with some additional functionality.

## Basic usage
```javascript
var swiper = require('./swipe-layers')

var initializedSwiper = swiper('#elementID', {
  left: 'leftMapboxId',
  right: 'rightMapboxId',
  zoom: zoomLevel,
  centroid: [lat, lon]
})
```

## todo
- Test on different browsers
- Package for NPM
