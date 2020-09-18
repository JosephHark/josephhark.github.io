document.getElementById('lastModified').innerHTML = document.lastModified;
let weekdays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
];
let month = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "Ocotober",
    "Novemeber",
    "Decemeber"
];
let d = new Date();
let day = weekdays[d.getDate];
let monthName = month[d.getMonth];
let year = d.getFullYear
let date = day + "," + monthName + " " + d.getDate() + "," + year;
document.getElementById("currentDate").textContent = date;