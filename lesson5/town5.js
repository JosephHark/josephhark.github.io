let week = ["Sunday",
    "Monday",
"Tuesday",
"Wednesday",
"Thursday",
"Friday",
"Saturday",];
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
let dayname = week[d.getDay()];
let month = monthNames[d.getMonth()];
let year = d.getFullYear();
let fulldate = dayname + " , " + month + " " + d.getDate() + " , " + year;
document.getElementById("currentDate").textContent = fulldate;

if (week == 5){
    display: block;
    var banner = "Saturday = Preston Pancakes in the Park!  9:00 a.m. Saturday at the city park pavilion.";
document.getElementById("picnic").textContent = banner;
}