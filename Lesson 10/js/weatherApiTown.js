const apiURL = "api.openweathermap.org/data/2.5/weather?id={5604473}&units=imperial&appid={7b19649f2b7c7c6c57bae89747626e76}";
fetch(apiURL)
    .then((response) => response.json())
    .then((jsObject) => {
        console.log(jsObject);
        const curtemp = document.querySelector('#current-temp');
        curtemp.innerHTML = jsObject.main.temp;
        document.getElementById('humidity').textContent = jsObject.main.humidity;
        document.getElementById('speed').textContent = jsObject.wind.speed;
        document.getElementById('max').textContent = jsObject.main.temp_max;
        document.getElementById('min').textContent = jsObject.main.temp_min;
    });
/*Calculates windchill*/
function buildWC(t, speed) {

    let wc = 35.74 + (0.6215 * t) - (35.75 * Math.pow(speed, 0.16)) + (0.4275 * t * Math.pow(speed, 0.16));
    wc = Math.floor(wc);
    //compute

    //if windchill is greater than temp return windchill
    return wc;
}

function getSummary() {
    let temp = ;
    let wind = ;
    let windchill = "N/A"
    if (temp <= 50 && wind > 3.0) {
        windchill = buildWC(temp, wind);
    }
    document.getElementById('windchill').innerHTML = `${windchill}&#8457`
}
getSummary();