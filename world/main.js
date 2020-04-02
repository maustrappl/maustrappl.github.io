let startLayer = L.tileLayer.provider("OpenTopoMap");

let map = L.map("map", {
    center: [0,0],
    zoom: 2,
    layers: [
        startLayer
    ]
});

L.control.layers({
    "OpenTopoMap" : startLayer,
    "OpenStreetMap.Mapnik" : L.tileLayer.provider("OpenStreetMap.Mapnik"),
    "Thunderforest.SpinalMap" : L.tileLayer.provider("Thunderforest.SpinalMap"),
    "NASAGIBS.ModisTerraTrueColorCR" : L.tileLayer.provider("NASAGIBS.ModisTerraTrueColorCR"),  //http://leaflet-extras.github.io/leaflet-providers/preview/index.html
    "Stamen.Toner" : L.tileLayer.provider("Stamen.Toner"),
    "Stamen.TerrainLabels" : L.tileLayer.provider("Stamen.TerrainLabels"),
    "Esri.WorldImagery" : L.tileLayer.provider("Esri.WorldImagery"),

}).addTo(map)