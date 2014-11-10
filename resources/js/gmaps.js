const MAP_ID = 'vegardAasen';

var mapId = "map-me";
var map;
var myWhereabouts = new google.maps.LatLng(59.9038127,10.7876544);
var wo = new google.maps.LatLng(59.898766,10.6261);
var te = new google.maps.LatLng(59.92384,10.731749);
var sp = new google.maps.LatLng(59.913196,10.732692);
var mapColor = "#363636";
var marker = "/resources/img/map/location.png";

function initialize() {
  var featureOpts = 
  [
      {
          "featureType": "administrative",
          "elementType": "labels",
          "stylers": [
              {
                  "visibility": "off"
              }
          ]
      },
      {
          "featureType": "administrative.country",
          "elementType": "geometry.stroke",
          "stylers": [
              {
                  "visibility": "off"
              }
          ]
      },
      {
          "featureType": "administrative.province",
          "elementType": "geometry.stroke",
          "stylers": [
              {
                  "visibility": "off"
              }
          ]
      },
      {
          "featureType": "landscape",
          "elementType": "geometry",
          "stylers": [
              {
                  "visibility": "on"
              },
              {
                  "color": "#f5f5f5"
              }
          ]
      },
      {
          "featureType": "landscape.natural",
          "elementType": "labels",
          "stylers": [
              {
                  "visibility": "off"
              }
          ]
      },
      {
          "featureType": "poi",
          "elementType": "all",
          "stylers": [
              {
                  "visibility": "off"
              }
          ]
      },
      {
          "featureType": "road",
          "elementType": "all",
          "stylers": [
              {
                  "color": "#cccccc"
              }
          ]
      },
      {
          "featureType": "road",
          "elementType": "labels",
          "stylers": [
              {
                  "visibility": "off"
              }
          ]
      },
      {
          "featureType": "transit",
          "elementType": "labels.icon",
          "stylers": [
              {
                  "visibility": "off"
              }
          ]
      },
      {
          "featureType": "transit.line",
          "elementType": "geometry",
          "stylers": [
              {
                  "visibility": "off"
              }
          ]
      },
      {
          "featureType": "transit.line",
          "elementType": "labels.text",
          "stylers": [
              {
                  "visibility": "off"
              }
          ]
      },
      {
          "featureType": "transit.station.airport",
          "elementType": "geometry",
          "stylers": [
              {
                  "visibility": "off"
              }
          ]
      },
      {
          "featureType": "transit.station.airport",
          "elementType": "labels",
          "stylers": [
              {
                  "visibility": "off"
              }
          ]
      },
      {
          "featureType": "water",
          "elementType": "geometry",
          "stylers": [
              {
                  "color": "#13d0a8"
              }
          ]
      },
      {
          "featureType": "water",
          "elementType": "labels",
          "stylers": [
              {
                  "visibility": "off"
              }
          ]
      }
  ];
  var mapOptions = {
    zoom: 12,
    center: sp,
    mapTypeControlOptions: {
      mapTypeIds: [google.maps.MapTypeId.ROADMAP, MAP_ID]
    },
    mapTypeId: MAP_ID,
    zoomControl: false,
    scaleControl: false,
    draggable: false,
    disableDefaultUI: true,
    disableDoubleClickZoom: true,
    scrollWheel: false
  };

  map = new google.maps.Map(document.getElementById(mapId), mapOptions);
  var styledMapOptions = {name: 'VegardsWhereabouts'};
  var customMapType = new google.maps.StyledMapType(featureOpts, styledMapOptions);
  new google.maps.Marker({position: myWhereabouts,map: map,icon: marker,opacity:1,clickable:false});
  new google.maps.Marker({position: wo,map: map,icon: marker,opacity:0.8,clickable:false});
  new google.maps.Marker({position: te,map: map,icon: marker,opacity:0.4,clickable:false});
  new google.maps.Marker({position: sp,map: map,icon: marker,opacity:0.6,clickable:false});
  map.mapTypes.set(MAP_ID, customMapType);
}

google.maps.event.addDomListener(window, 'load', initialize);
