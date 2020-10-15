const d = new Date();
let message = document.querySelector(".message");

if (d.getDay() == 5) {
    message.style.display = "block";
};