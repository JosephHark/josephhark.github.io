const d = new Date();
let message = document.querySelector(".message");

if (d.getDay() == 6) {
    message.style.display = "block";
} else {
    message.style.display = "none";
};