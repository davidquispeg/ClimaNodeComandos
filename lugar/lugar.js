const axios = require('axios');
const getLugarLatLng = async(direccion) => {
    let encodeUrl = encodeURI(direccion);
    //Espero hasta que tenga los datos de google
    let resp = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${ encodeUrl }&key=AIzaSyAKIwPSFjoceTS2g2r17D-B9lQX_36rA5I`)

    if (resp.data.status === 'ZERO_RESULTS') {
        throw new Error(`No hay resultados para la ciudad ${direccion}`);
    }
    let location = resp.data.results[0];
    let coord = location.geometry.location;

    return {
        direccion: location.formatted_address,
        lat: coord.lat,
        lng: coord.lng
    }
}

module.exports = {
    getLugarLatLng
}




/*
//con ecmascript 6
//convierte un string en una direcion URL amigable
let encodeUrl = encodeURI(argv.descripcion);
axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${ encodeUrl }&key=AIzaSyAKIwPSFjoceTS2g2r17D-B9lQX_36rA5I`)
    .then(resp => {
        //al ejecutar al final muestra esto==> data: { results: [ [Object], [Object] ], status: 'OK' } }
        //console.log(resp);
        //Para desglosar(hasta en 2 niveles) los objetos que aparecen
        //console.log(JSON.stringify(resp.data,undefined,2));
        let location = resp.data.results[0];
        let coord = location.geometry.location;
        console.log('Direccion:', location.formatted_address);
        console.log('lat',coord.lat);
        console.log('lng',coord.lng);
    })
    .catch(e => console.log('Error', e));
*/