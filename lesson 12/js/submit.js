var slider = document.getElementById("peroid");
var output = document.getElementById("demo");
output.innerHTML = slider.value;

slider.oninput = function () {
    output.innerHTML = this.value
}

function formSubmit() {
    document.forms["myForm"].submit();
    location.replace("https://josephhark.github.io/lesson%2012/deposit.html")
}