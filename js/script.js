var map = L.map('map', {zoomControl: false}).setView([39.3282, -95.5795], 5);

var Esri_OceanBasemap = L.tileLayer('http://server.arcgisonline.com/ArcGIS/rest/services/Ocean_Basemap/MapServer/tile/{z}/{y}/{x}', {
	attribution: 'Tiles &copy; Esri &mdash; Sources: GEBCO, NOAA, CHS, OSU, UNH, CSUMB, National Geographic, DeLorme, NAVTEQ, and Esri',
	maxZoom: 13}).addTo(map);

L.control.zoom({position: 'bottomright'}).addTo(map);

var myIcon = L.icon({
    iconUrl: '../images/findajob.png',
    iconSize: [38, 38],
    iconAnchor: [19, 19],
    popupAnchor: [-3, -16]
});
var MSP = {
	name:"Minneapolis-St. Paul, Minnesota",
	latitude:44.8819,
	longitude:-93.2217,
	rate:4.0
}

var denver = {
	name:"Denver, Colorado",
	latitude:39.7392,
	longitude:-104.9847,
	rate:4.0
}

function placeCity(city) {
	L.marker([city.latitude, city.longitude], {icon: myIcon}).addTo(map).bindPopup(city.name + ": "+ city.rate);
}

var austin = {
	name: "Austin, Texas",
	latitude:30.2500,
	longitude:-97.7500,
	rate:4.2
}

var OKC = {
	name: "Oklahoma City, Oklahoma",
	latitude:35.4822,
	longitude:-97.5350,
	rate:4.2
}

var columbus = {
	name: "Columbus, Ohio",
	latitude:39.9833,
	longitude:-82.9833, 
	rate: 4.3
}

var pittsburgh = {
	name: "Pittsburgh, Pennsylvania",
	latitude:40.4417,
	longitude:-80.0000, 
	rate: 4.6
}

var sanAntonio = {
	name: "San Antonio, Texas",
	latitude:29.4167,
	longitude:-98.5000, 
	rate:4.7
}

var cincinnati = {
	name: "Cincinnati, Ohio",
	latitude:39.1000,
	longitude:-84.5167,
	rate: 4.8
}

var indianapolis = {
	name: "Indianapolis, Indiana",
	latitude:39.7910,
	longitude:-86.1480, 
	rate:4.8
}

var houston ={
	name: "Houston, Texas",
	latitude:29.7628,
	longitude:-95.3831, 
	rate:4.9
}

var cities = [MSP,denver,austin,OKC,columbus,pittsburgh,sanAntonio,cincinnati,indianapolis,houston];

function placeCities(x) {
	var i = 0;
	while (i< x.length) {
		placeCity(x[i]);
		i = i+1;
	}
}

placeCities(cities);

$('.leaflet-marker-icon').on('click',function() {
	$('#sidebar').css('top','-10px');
	$('#cityinfo').text('MOVE HERE!');
})
$('#map').on('click', function() {
	$('#sidebar').css('top','76vh');
	$('#cityinfo').text('');
})

