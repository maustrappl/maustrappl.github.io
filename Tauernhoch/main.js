let startLayer = L.tileLayer.provider("BasemapAT.grau");

let map = L.map("map", {
    center: [47.17971944, 12.181495],
    zoom: 11,
    layers: [
        startLayer
    ]
});


let overlay = {
    borders: L.featureGroup(),
    ebikes: L.featureGroup(),
    wandern: L.featureGroup(),
}


L.control.layers({
    "BasemapAT": startLayer,
    "BasemapAT.highdpi": L.tileLayer.provider("BasemapAT.highdpi"),
    "BasemapAT.terrain": L.tileLayer.provider("BasemapAT.terrain"),
    "BasemapAT.orthofoto": L.tileLayer.provider("BasemapAT.orthofoto"),
    "BasemapAT.orthofoto+overlay": L.layerGroup([
        L.tileLayer.provider("BasemapAT.orthofoto"),
        L.tileLayer.provider("BasemapAT.overlay")
    ])
}, {
    "Nationalpark Hohe Tauern": overlay.borders,
    "E-Bike Routen": overlay.ebikes,
     "Wandern": overlay.wandern,
}).addTo(map);

let aussengrenze = L.geoJSON(GRENZE).addTo(overlay.borders);
 overlay.borders.addTo(map);

 for (const etappe of Ebike) {
    //console.log(blick);
    let mrk = L.marker(["path"], {
        icon: L.icon({
            iconSize: [32, 37],
            iconAnchor: [16, 37],
            popupAnchor: [0, -37],
            iconUrl: "icons/panoramicview.png"
        })
    }).addTo(overlay.ebike);
    //L.marker([blick.lat,blick.lng]).addTo(map);
    mrk.bindPopup(`Standort ${blick.standort} (${blick.seehoehe}m)`);
}

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

console.log(Ebike);
console.log(GRENZE);
    // ebike
    // let sightUrl = " https://gis.tirol.gv.at/ogd/sport_freizeit/NPHT/nphtt_ebike_wgs84_JSON.zip";

    // let radln = L.geoJSON(EBIKE).addTo(overlay.ebikes);
    // overlay.ebikes.addTo(map);

    // console.log (radln);

    // let sights = L.geoJson.ajax(sightUrl, { //Punkte als Marker setzen
    //     pointToLayer: function (point, latlng) { //definiton der MArker
    //         let icon = L.icon({
    //             iconUrl: 'Icons/sight.svg',
    //             iconSize: [32, 32]
    //         });
    //         let marker = L.marker(latlng, {
    //             icon: icon
    //         });
    
    
    //         // name, adresse, kurzbeschreibung und link
    //         marker.bindPopup(`<h3>${point.properties.NAME}</h3>  
    //         <p><c>Adresse:</c>${point.properties.ADRESSE}<p>
    //         <p><c>Kurzbeschreibung:</c>${point.properties.BEMERKUNG}<p>
    //         <p><a target="links" href="${point.properties.WEITERE_INF}">weiterführende Informationen</a></p>`);
    //         return marker;
    //     }
    // });
    





//}).addTo(map);