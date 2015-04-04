$( document ).ready(function() {

  var myLatlng = new google.maps.LatLng(45.465142,9.189749,5.465142);
  var pharmacyMarkerCoordinate = new google.maps.LatLng(45.484642, 9.187689);

  var mapOptions = {
  center: myLatlng,
  zoom: 10
  };
  var map = new google.maps.Map(document.getElementById('map-canvas'),
    mapOptions);

  setMarkersHospitals(map, hospitals);
  setMarkersPharmacy(map, pharmacy);

});

var hospitals = [
  ['San Raffaele', 45.506783, 9.265623, 4, 'ciao1'],
  ['Neurochirurgia Dott. Nicola Boari Ospedale San Raffaele Milano', 45.492585, 9.236440, 4,'ciao2'],
  ['Ospedale Niguarda Ca Granda', 45.510392, 9.185629, 4,'ciao3']
];

var pharmacy = [
  ["Farmacia Carlo Erba", 45.484642, 9.187689, 4, "ciao1"],
  ["Farmacia Garibaldi", 45.484161, 9.186315, 4,"ciao2"],
  ["Farmacia Stazione Centrale Di Pedretti Laura & C. Sas", 45.484401, 9.203825, 4, "ciao3"]
];

function setMarkersHospitals(map, locations){

  var contentString = hospitals[4];
  var infowindow = new google.maps.InfoWindow();

  var hospitalMarkerCoordinate = new google.maps.LatLng(hospitals[1], hospitals[2]);
  var hospitalMarker = '../img/marker-pin-google-hi.png';
  
  hospitalMarker = new google.maps.Marker({
    position: hospitalMarkerCoordinate,
    map: map,
    icon: hospitalMarker,
    title: hospitals[4],
    zoom: hospitals[3]
  });

  var bindInfoW = function(hospitalMarker, contentString, infowindow){
    google.maps.event.addListener(hospitalMarker, 'mouseover', function() {
      infowindow.setContent(contentString);
      infowindow.open(map, hospitalMarker);
    });

    google.maps.event.addListener(hospitalMarker, 'mouseout', function() {
      infowindow.close();
    });
  };

  for (var i = 0; i < locations.length; i++){
    hospitals = locations[i];
    bindInfoW(hospitalMarker, contentString, infowindow);
  }
}



var setMarkersPharmacy = function(map, locations){
  var pharmacyMarkerCoordinate = new google.maps.LatLng(pharmacy[1], pharmacy[2]);
  
  var pharmacyMarker = new google.maps.Marker({
    position: pharmacyMarkerCoordinate,
    map: map,
    title: pharmacy[4],
    zoom: pharmacy[3]
  });

  var contentString = pharmacy[4];
  var infowindow = new google.maps.InfoWindow();

  var bindInfoW = function(pharmacyMarker, contentString, infowindow){
    google.maps.event.addListener(pharmacyMarker, 'mouseover', function() {
      infowindow.setContent(contentString);
      infowindow.open(map, pharmacyMarker);
    });

    google.maps.event.addListener(pharmacyMarker, 'mouseout', function() {
      infowindow.close();
    });
  };


  for (var i = 0; i < locations.length; i++){
    pharmacy = locations[i]; 
    bindInfoW(pharmacyMarker, contentString, infowindow);
  }
};

//google.maps.event.addDomListener(window, 'load', initialize);