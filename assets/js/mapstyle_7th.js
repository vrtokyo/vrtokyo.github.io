function initialize() {
  var latlng = new google.maps.LatLng(35.67865,139.76737);
  var myOptions = {
    zoom: 18,
    center: latlng,
    mapTypeControlOptions: { mapTypeIds: ['sample', google.maps.MapTypeId.ROADMAP] }
  };
  var map = new google.maps.Map(document.getElementById('map_canvas'), myOptions);
  var icon = new google.maps.MarkerImage('assets/img/marker-21x32.png',
    new google.maps.Size(21,32),
    new google.maps.Point(0,0)
    );
  var markerOptions = {
    position: latlng,
    map: map,
    icon: icon,
    title: 'グラントウキョウサウスタワー'
  };
  var marker = new google.maps.Marker(markerOptions);
  var styleOptions = [
  {
    "stylers": [
      { "hue": "#d40d12" },
      { "visibility": "simplified" }
    ]
  }
  ];
  var styledMapOptions = { name: 'グラントウキョウサウスタワー' }
  var sampleType = new google.maps.StyledMapType(styleOptions, styledMapOptions);
  map.mapTypes.set('sample', sampleType);
  map.setMapTypeId('sample');
}
google.maps.event.addDomListener(window, 'load', initialize);
