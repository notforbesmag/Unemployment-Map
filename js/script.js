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

var MSP ={};
MSP.latitude=44.8819;

var MSP2 = L.marker([MSP.latitude, -93.2217], {icon: myIcon}).addTo(map);
MSP2.bindPopup("Minneapolis-St. Paul, Minnesota: 3.6");

var denver = L.marker([39.7392, -104.9847], {icon: myIcon}).addTo(map);
denver.bindPopup("Denver, Colorado: 4.0");

var austin = L.marker([30.2500, -97.7500], {icon: myIcon}).addTo(map);
austin.bindPopup("Austin, Texas: 4.2");

var OKC = L.marker([35.4822, -97.5350], {icon: myIcon}).addTo(map);
OKC.bindPopup("Oklahoma City, Oklahoma: 4.2");

var columbus = L.marker([39.9833, -82.9833], {icon: myIcon}).addTo(map);
columbus.bindPopup("Columbus, Ohio: 4.3");

var pittsburgh = L.marker([40.4417, -80.0000], {icon: myIcon}).addTo(map);
pittsburgh.bindPopup("Pittsburgh, Pennsylvania: 4.6");

var sanAntonio = L.marker([29.4167, -98.5000], {icon: myIcon}).addTo(map);
sanAntonio.bindPopup("San Antonio, Texas: 4.7");

var cincinnati = L.marker([39.1000, -84.5167], {icon: myIcon}).addTo(map);
cincinnati.bindPopup("Cincinnati, Ohio: 4.8");

var indianapolis = L.marker([39.7910, -86.1480], {icon: myIcon}).addTo(map);
indianapolis.bindPopup("Indianapolis, Indiana: 4.8");

var houston = L.marker([29.7628, -95.3831], {icon: myIcon}).addTo(map);
houston.bindPopup("Houston, Texas:4.9");

$('.leaflet-marker-icon').on('click',function() {
	$('#sidebar').css('top','-10px');
	$('#cityinfo').text('MOVE HERE!');
})
$('#map').on('click', function() {
	$('#sidebar').css('top','76vh');
	$('#cityinfo').text('');
})

