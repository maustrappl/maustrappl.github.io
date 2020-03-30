//alert("Hallo Welt!")
let map = document.querySelector("#map")
let lat = map.dataset.lat;
let lat = map.dataset.lng;

var mymap = L.map(`map`).steView([lat,lng], 13);