let speed = document.getElementById('speed');
let temp = document.getElementById('temp');
/*Calculates windchill*/
function buildWC(speed,temp){
    let feelTemp = document.getElementById('chill');

    //compute
    let wc = 35.74 + (0.6215 * t) - (35.75 * Math.pow(speed, 0.16)) + (0.4275 * t * Math.pow(speed, 0.16));
    console.log(wc);
    wc=Math.floor(wc);

    //if windchill is greater than temp return windchill
    wc = (wc > temp) ? temp:wc;
    console.log(wc);
    feelTemp.innerHTML = wc;
}