//Funcao para validar se o objeto está vazio
exports.isEmptyObject = (obj) => {
    for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
            return false;
        }
    }
    return true;
}

// Funcao que calcula a distancia de um usuario para outro
exports.getDistanceFromLatLonInKm = (position1, position2) => {
    "use strict";
    var deg2rad = function (deg) { return deg * (Math.PI / 180); },
        R = 6371,
        dLat = deg2rad(position2.latitude - position1.latitude),
        dLng = deg2rad(position2.longitude - position1.longitude),
        a = Math.sin(dLat / 2) * Math.sin(dLat / 2)
            + Math.cos(deg2rad(position1.latitude))
            * Math.cos(deg2rad(position1.latitude))
            * Math.sin(dLng / 2) * Math.sin(dLng / 2),
        c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return ((R * c *1000).toFixed());
}

// var distancia = (getDistanceFromLatLonInKm(
//    {lat: -16.0789399, lng: -47.9870726},
//    {lat: -16.0566187, lng: -47.9739781}
// ));