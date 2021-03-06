let startLayer = L.tileLayer.provider("BasemapAT.grau");

let map = L.map("map", {
    center: [48.208333, 16.373056],
    zoom: 12,
    layers: [
        startLayer
    ]
});

let sightGroup = L.markerClusterGroup().addTo(map);
let walkGroup = L.featureGroup().addTo(map);
let heritageGroup = L.featureGroup().addTo(map);


L.control.layers({
    "BasemapAT.grau": startLayer,
    "BasemapAT": L.tileLayer.provider("BasemapAT"),
    "BasemapAT.highdpi": L.tileLayer.provider("BasemapAT.highdpi"),
    "BasemapAT.terrain": L.tileLayer.provider("BasemapAT.terrain"),
    "BasemapAT.surface": L.tileLayer.provider("BasemapAT.surface"),
    "BasemapAT.orthofoto": L.tileLayer.provider("BasemapAT.orthofoto"),
    "BasemapAT.overlay": L.tileLayer.provider("BasemapAT.overlay"),
    "BasemapAT.orthofoto+overlay": L.layerGroup([
        L.tileLayer.provider("BasemapAT.orthofoto"),
        L.tileLayer.provider("BasemapAT.overlay")
    ])
}, {
    "Stadtspaziergang (Punkte)": sightGroup,
    "Wanderungen": walkGroup,
    "Weltkulturerbe": heritageGroup

}).addTo(map);

//Stadtspaziergang

let sightUrl = "https://data.wien.gv.at/daten/geo?service=WFS&request=GetFeature&version=1.1.0&typeName=ogdwien:SPAZIERPUNKTOGD &srsName=EPSG:4326&outputFormat=json";

let sights = L.geoJson.ajax(sightUrl, { //Punkte als Marker setzen
    pointToLayer: function (point, latlng) { //definiton der MArker
        let icon = L.icon({
            iconUrl: 'Icons/sight.svg',
            iconSize: [32, 32]
        });
        let marker = L.marker(latlng, {
            icon: icon
        });


        // name, adresse, kurzbeschreibung und link
        marker.bindPopup(`<h3>${point.properties.NAME}</h3>  
        <p><c>Adresse:</c>${point.properties.ADRESSE}<p>
        <p><c>Kurzbeschreibung:</c>${point.properties.BEMERKUNG}<p>
        <p><a target="links" href="${point.properties.WEITERE_INF}">weiterführende Informationen</a></p>`);
        return marker;
    }
});



sights.on("data:loaded", function () {
    sightGroup.addLayer(sights);
    //console.log('data loaded!');
    map.fitBounds(sightGroup.getBounds());
});

let wandern = "https://data.wien.gv.at/daten/geo?service=WFS&request=GetFeature&version=1.1.0&typeName=ogdwien:WANDERWEGEOGD&srsName=EPSG:4326&outputFormat=json";

L.geoJson.ajax(wandern, {
    style: function (feature) {
        if (feature.properties.TYP == "1") {
            return {
                color: "black",
                weight: 2,
                dashArray: "6 10"
            };
        } else {
            return {
                color: "black",
                weight: 2,
                dashArray: "1 8"
            };
        }
    },
    onEachFeature: function (feature, layer) {
        layer.bindPopup(`<p>${feature.properties.BEZ_TEXT}</p>`);
    }
}).addTo(walkGroup);

// weltulturerbe

let heritage = "https://data.wien.gv.at/daten/geo?service=WFS&request=GetFeature&version=1.1.0&typeName=ogdwien:WELTKULTERBEOGD&srsName=EPSG:4326&outputFormat=json";

L.geoJson.ajax(heritage, {
    style: function (feature) {
        if (feature.properties.TYP == "1") {
            return {
                color: "salmon",
                fillOpacity: 0.3
            };
        } else {
            return {
                color: "yellow",
                fillOpacity: 0.3

            };
        }
    },
    onEachFeature: function (feature, layer) {
        //console.log("Feature: ", feature);
        layer.bindPopup(`<h3>${feature.properties.NAME}</h3>
        <p>${feature.properties.INFO}</p>
        `);
    }
}).addTo(heritageGroup);