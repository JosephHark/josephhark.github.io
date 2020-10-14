let week = ["Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
];
let d = new Date();
let dayname = week[d.getDay()];
if (dayname == "Friday") {
    var banner = "Saturday = Preston Pancakes in the Park!  9:00 a.m. Saturday at the city park pavilion.";
    document.getElementById("picnic").textContent = banner;
}