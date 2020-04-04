let startLayer = L.tileLayer.provider("OpenTopoMap");

let map = L.map("map", {
    center: [0, 0],
    zoom: 2,
    layers: [
        startLayer
    ]
});

let circleGroup = L.featureGroup().addTo(map);
L.control.layers({
    "OpenTopoMap": startLayer,
    "OpenStreetMap.Mapnik": L.tileLayer.provider("OpenStreetMap.Mapnik"),
    "Thunderforest.SpinalMap": L.tileLayer.provider("Thunderforest.SpinalMap"),
    "NASAGIBS.ModisTerraTrueColorCR": L.tileLayer.provider("NASAGIBS.ModisTerraTrueColorCR"), //http://leaflet-extras.github.io/leaflet-providers/preview/index.html
    "Stamen.Toner": L.tileLayer.provider("Stamen.Toner"),
    "Stamen.TerrainLabels": L.tileLayer.provider("Stamen.TerrainLabels"),
    "Esri.WorldImagery": L.tileLayer.provider("Esri.WorldImagery"),
}, {
    "Thematische Darstellung": circleGroup
}).addTo(map);

L.marker([0, 0]).addTo(map);

//console.log(CONFIRMED);
//console.log(CONFIRMED);
for (let i = 1; i < CONFIRMED.length; i++) {
    let row = CONFIRMED[i];
    //console.log(row[2],row[3]);
    let val = row[row.length - 1];
    let mrk = L.marker([row[2], row[3]]).addTo(map);
    mrk.bindPopup(`${row[0]} ${row[1]}: ${val}`);
}