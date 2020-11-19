/*Calculates windchill*/
function buildWC(t, speed){

    let wc = 35.74 + (0.6215 * t) - (35.75 * Math.pow(speed, 0.16)) + (0.4275 * t * Math.pow(speed, 0.16));
    wc=Math.floor(wc);
    //compute
    
    //if windchill is greater than temp return windchill
    return wc;
    }

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }

function getSummary(){
    let temp = getRndInteger(25,60);
    let wind = getRndInteger(4,27);
    let precipitation = getRndInteger(25,100);
    let windchill = "N/A"
    if (temp <= 50 && wind > 3.0){
        windchill = buildWC(temp, wind);

    }

    document.getElementById('temp').innerHTML = ` ${temp}&#8457`
    document.getElementById('precip').innerHTML = ` ${precipitation}%`
    document.getElementById('speed').innerHTML = ` ${wind} MPH`
    document.getElementById('windchill').innerHTML = `${windchill}&#8457`
}
getSummary();