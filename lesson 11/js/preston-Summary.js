const prestonapiURL = "http://api.openweathermap.org/data/2.5/forecast?id=5604473&appid=a21b3a033736d7d3908ca1bc674e2551&units=imperial"
fetch(prestonapiURL)
    .then((response) => response.json())
    .then((jsObject) => {
        console.log(jsObject);
        const curtemp = document.querySelector('#current-temp');
        curtemp.innerHTML = jsObject.main.temp;

        const humidity = document.querySelector('#humidity');
        humidity.innerHTML = jsObject.main.humidity;

        const speed = document.querySelector('#speed');
        speed.innerHTML = jsObject.wind.speed;

        const max = document.querySelector('#max');
        max.innerHTML = jsObject.main.temp_max;

        const min = document.querySelector('#min');
        min.innerHTML = jsObject.main.temp_min;
    });
/*Calculates windchill*/
function buildWC(t, speed) {

    let wc = 35.74 + (0.6215 * t) - (35.75 * Math.pow(speed, 0.16)) + (0.4275 * t * Math.pow(speed, 0.16));
    wc = Math.floor(wc);
    //compute

    //if windchill is greater than temp return windchill
    return wc;
}

function getSummary(curtemp, speed) {
    let temp = curtemp;
    let wind = speed;
    let windchill = "N/A"
    if (temp <= 50 && wind > 3.0) {
        windchill = buildWC(temp, wind);
    }
    document.getElementById('windchill').innerHTML = `${windchill}&#8457`
}
getSummary();