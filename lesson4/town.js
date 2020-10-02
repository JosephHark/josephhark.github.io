let dayNames = ["Monday",
"Tuesday",
"Wednesday",
"Thursday",
"Friday",
"Saturday",
"Sunday"];
let monthNames = [ "January",
"February",
"March",
"April",
"May",
"June",
"July",
"August",
"September",
"October",
"November",
"December"];

let d = new Date();
let dayNames = dayname[d.getDay()];
let month = monthNames[d.getMonth()];
let year = d.getFullYear();
let fulldate = dayname + " , " + month + " " + d.getDate + " , " + year;
document.getElementById("currentDate").textContent = fulldate;