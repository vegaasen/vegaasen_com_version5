var mapId = "map-me";
var map;
var myWhereabouts = new google.maps.LatLng(40.6743890, -73.9455);
var mapColor = "#363636";

var MY_MAPTYPE_ID = 'custom_style';

function initialize() {
  var featureOpts = [
    {
      stylers: [
        { hue: mapColor },
        { visibility: 'simplified' },
        { gamma: 1.5 },
        { weight: 0.5 }
      ]
    },
    {
      elementType: 'labels',
      stylers: [
        { visibility: 'off' }
      ]
    },
    {
      featureType: 'water',
      stylers: [
        { color: mapColor }
      ]
    }
  ];
  var mapOptions = {
    zoom: 12,
    center: myWhereabouts,
    mapTypeControlOptions: {
      mapTypeIds: [google.maps.MapTypeId.ROADMAP, MY_MAPTYPE_ID]
    },
    mapTypeId: MY_MAPTYPE_ID
  };

  map = new google.maps.Map(document.getElementById(mapId), mapOptions);
  var styledMapOptions = {name: 'Custom Style'};
  var customMapType = new google.maps.StyledMapType(featureOpts, styledMapOptions);
  map.mapTypes.set(MY_MAPTYPE_ID, customMapType);
}
google.maps.event.addDomListener(window, 'load', initialize);