
var slider = document.getElementById("rating");
var output = document.getElementById("demo");
output.innerHTML = slider.value;

slider.oninput = function() {
  output.innerHTML = this.value}

function formSubmit() {
    document.forms["myForm"].submit();
    location.replace("https://www.w3schools.com")
}