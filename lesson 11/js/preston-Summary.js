const prestonapiURL = "http://api.openweathermap.org/data/2.5/forecast?id=5604473&appid=a21b3a033736d7d3908ca1bc674e2551&units=imperial"
fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
    var currently = document.getElementById('currently').textContent = jsObject.weather[0].main;
    var tempF = jsObject.main.temp_max;
    document.getElementById('tempF').innerHTML = tempF
    var speed = jsObject.wind.speed;
    document.getElementById('speed').innerHTML = speed
    document.getElementById('humudity').innerHTML = jsObject.main.humidity;
    document.getElementById('windchill').innerHTML = windchill(tempF, speed);
    function windchill(t, s) {
      if (t <= 50 && s >= 3.8) {
        return Math.round(35.74 + 0.6215 * t - 35.75 * s ** 0.16 + 0.4275 * t * s ** 0.16) + " &deg;F";
      }
      else {
        return "N/A";
      }
    }
  });