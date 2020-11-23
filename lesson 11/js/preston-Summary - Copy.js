const prestonapiURL = "http://api.openweathermap.org/data/2.5/forecast?id=5604473&appid=a21b3a033736d7d3908ca1bc674e2551&units=imperial"
fetch(prestonapiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    
    let t = parseFloat(jsObject.main.temp);
    let s = parseFloat(jsObject.wind.speed);
    let output = "N/A";
    document.getElementById('weather').innerHTML = jsObject.weather[0].description;
    document.getElementById('current-temp').innerHTML = Math.round(t) + "&#8457;";
    if (t <= 50 && s >= 3) {
      let f = (35.74 + (0.6215 * t)) - (35.75 * (Math.pow(s, 0.16))) + (0.4275 * (t * (Math.pow(s, 0.16))));
      output = Math.round(f);
    };
    document.getElementById("output").innerHTML = output + "&#8457;";
    document.getElementById('humidity').innerHTML = jsObject.main.humidity + "&#37;";
    document.getElementById('speed').innerHTML = Math.round(s) + " mph";

  });