var slider = document.getElementById("peroid");
var output = document.getElementById("demo");
output.innerHTML = slider.value;

slider.oninput = function () {
    output.innerHTML = this.value
}

document.querySelectorAll('#contact input')

let whole = Array.from(document.querySelectorAll('#contact input')).reduce((acc, input) => ({
...acc,
[input.id]: input.value
}), {});

console.log(whole);
/*
function formSubmit() {
    document.forms["myForm"].submit();
    location.replace("https://josephhark.github.io/lesson%2012/deposit.html")
}
*/