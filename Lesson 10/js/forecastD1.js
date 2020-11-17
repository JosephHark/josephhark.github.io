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

let today = new Date();
let tomorrow = new Date(today);
tomorrow.setDate(tomorrow.getDate() + 1)
let dayname = week[tomorrow.getDay()];
let month = monthNames[tomorrow.getMonth()];
let year = tomorrow.getFullYear();
let fulldate = dayname + " , " + month + " " + today.getDate() + " , " + year;
document.getElementById("tomorrowDate") = fulldate;