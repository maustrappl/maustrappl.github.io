let startLayer = L.tileLayer.provider("OpenTopoMap");

let map = L.map("map", {
    center: [0, 0],
    zoom: 2,
    layers: [
        startLayer
    ]
});

L.control.layers({
    "OpenTopoMap": startLayer,
    "OpenStreetMap.Mapnik": L.tileLayer.provider("OpenStreetMap.Mapnik"),
    "Thunderforest.SpinalMap": L.tileLayer.provider("Thunderforest.SpinalMap"),
    "NASAGIBS.ModisTerraTrueColorCR": L.tileLayer.provider("NASAGIBS.ModisTerraTrueColorCR"), //http://leaflet-extras.github.io/leaflet-providers/preview/index.html
    "Stamen.Toner": L.tileLayer.provider("Stamen.Toner"),
    "Stamen.TerrainLabels": L.tileLayer.provider("Stamen.TerrainLabels"),
    "Esri.WorldImagery": L.tileLayer.provider("Esri.WorldImagery"),

}).addTo(map);

L.marker([0, 0]).addTo(map);

//console.log(CONFIRMED);
for (let i = 0; i < CONFIRMED.length; i++) {
    let row = CONFIRMED[i];

let reg = `${row[0]} ${row[1]}`;
let lat = row[2];
let lng = row[3];
let val = row[row.lenth-1];
let mrk = L.marker([lat,lng]).addTo(map);
mrk.bindPopup(`${reg}: ${val}`);   


let circle = L.circleMarker([lat,lng],{
    radius:(val/2)*0.001
}).addTo(map;
    circle.bindPopup(`${reg}: ${val}`);
}