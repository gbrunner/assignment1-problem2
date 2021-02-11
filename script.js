var map = L.map('map').setView([37.692, -122.4424], 12);

  // load a tile layer
 L.tileLayer('https://stamen-tiles-{s}.a.ssl.fastly.net/toner/{z}/{x}/{y}{r}.{ext}', {
	attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
	subdomains: 'abcd',
	minZoom: 0,
	maxZoom: 20,
	ext: 'png'
}).addTo(map);

$.getJSON("https://raw.githubusercontent.com/gbrunner/adv-python-for-gis-and-rs/master/Week%201/sf_crime.geojson",function(data){
   var Jason = L.icon({
    iconUrl: "https://img.icons8.com/color/48/000000/jason-voorhees.png",
    iconSize: [40,31]
  }); 
  L.geoJson(data  ,{
    pointToLayer: function(feature,latlng){
	  return L.marker(latlng,{icon: Jason});
    }
  }  ).addTo(map);
});
