const day = new Date();
let message = document.querySelector(".message");

if (day.getDay() == 5) {
    message.style.display = "block";
} else {
    message.style.display = "none";
};