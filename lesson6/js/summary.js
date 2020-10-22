function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }

function getSummary(){
    let temp = getRndInteger(25,60);
    let wind = getRndInteger(4,27);
    let precipitation = getRndInteger(25,100);
    let windchill = "N/A"
    if (temp <= 50 && wind > 3.0){
        windchill = windChill(temp, wind);
    }

    document.getElementById('temperature').innerHTML = `Current temperature: ${temp}&#8457;`
    document.getElementById('precipitation').innerHTML = `Precipitation: ${precipitation}%`
    document.getElementById('wind').innerHTML = `Wind speed: ${wind} MPH`
    document.getElementById('windchill').innerHTML = `Wind Chill: ${windchill}`