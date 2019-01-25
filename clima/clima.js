const axios = require('axios');
const getClima = async(lat, lng) => {
        let resp = await axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&units=metric&appid=17b2cc355ce957cdac7f5aed9fc3ee5c`)
        return resp.data.main.temp;
    }
    //17b2cc355ce957cdac7f5aed9fc3ee5c
module.exports = {
    getClima
}