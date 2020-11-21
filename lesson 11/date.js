let week = ["Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
];
let monthNames = ["January",
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
    "December"
];

let d = new Date();
let dayname = week[d.getDay()];
let month = monthNames[d.getMonth()];
let year = d.getFullYear();
let fulldate = dayname + " , " + month + " " + d.getDate() + " , " + year;
document.getElementById("currentDate").innerHTML = fulldate;