let t = 69;
let speed = 15;
/*Calculates windchill*/
function buildWC(speed, t){
let feelTemp = document.getElementById('chill');

let wc = 35.74 + (0.6215 * t) - (35.75 * Math.pow(speed, 0.16)) + (0.4275 * t * Math.pow(speed, 0.16));
console.log(wc);
wc=Math.floor(wc);
//compute

//if windchill is greater than temp return windchill
wc = (wc > temp) ? temp:wc;
console.log(wc);
feelTemp.innerText = wc;
}
buildWC(speed, t);