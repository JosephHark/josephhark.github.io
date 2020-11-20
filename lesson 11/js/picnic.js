const picnic = new Date();
let message = document.querySelector(".message");

if (picnic.getDay() == 5) {
    message.style.display = "block";
} else {
    message.style.display = "none";
};