window.onload = function () {
    var map = L.map('map');

    map.locate({ setView: true, maxZoom: 16 });

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);

    // Define o ícone azul
    var blueIcon = L.icon({
        iconUrl: "../images/iconBlue.png",
        iconSize: [16, 16], // tamanho do ícone
        iconAnchor: [22, 94], // ponto do ícone correspondente à localização do marcador
        popupAnchor: [-3, -76] // ponto a partir do qual o popup deve ser aberto em relação ao íconeAnchor
    });

    // Manipula a localização encontrada
    function onLocationFound(e) {
        var radius = e.accuracy / 2;

        L.marker(e.latlng, { icon: blueIcon }).addTo(map)
            .bindPopup("Você está aqui").openPopup();
    }

    // Associa o evento de 'locationfound' ao mapa
    map.on('locationfound', onLocationFound);

    fetch("../data/professionals.json")
        .then(res => res.json())
        .then(data => {
            data.forEach(point => {
                L.marker([point.latitude, point.longitude]).addTo(map).bindPopup(point.endereco)
            })
        })
}