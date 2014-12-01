# Swipe Layer tool

Give two Mapbox ids and a lat/lon pair to swipe between them. 

Based on [this guide](https://www.mapbox.com/mapbox.js/example/v1.0.0/swipe-layers/) with some additional functionality.

The gh-pages branch can be used as an iframe embed

## iframe

Create an iframe with the URL: 
```
http://kamicut.cc/swipe-layers/?left=leftMapboxId&right=rightMapboxId&zoom=zoomLevel&centroid=lat,lon
```

Where `zoomLevel` is an integer from 0 to 16 and `lat` & `lon` are numbers corresponding to latitude and longitude (e.g: 38.91,-77.03)

## basic usage
```javascript
var swiper = require('./swipe-layers')

var initializedSwiper = swiper('#elementID', {
  left: 'leftMapboxId',
  right: 'rightMapboxId',
  zoom: zoomLevel,
  centroid: [lat, lon]
})
```

Read the examples for more details


## todo
- Test on different browsers
- Package for NPM
