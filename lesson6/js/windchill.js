function windChill(tempF, speed) {
  let s = Math.pow(speed, 0.16);
  f = 35.74 + (0.6215 * tempF) - (35.75 * s) + (0.4275 * tempF * s);
  return f.toFixed(2) + "&#8457;";
}