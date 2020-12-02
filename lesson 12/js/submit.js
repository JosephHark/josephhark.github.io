var slider = document.getElementById("peroid");
var output = document.getElementById("demo");
output.innerHTML = slider.value;

slider.oninput = function () {
    output.innerHTML = this.value
}
/*
document.querySelectorAll('#contact input')

let f = Array.from(document.querySelectorAll('#contact input')).reduce((acc, input) => ({
...acc,
[input.id]: input
}), {});*/
var whole = new Array();
var firstn=document.getElementById('fname');
var lastn=document.getElementById('lname');
var emailn=document.getElementById('email');
var phonen=document.getElementById('phone');
var date=document.getElementById('date');
var time=document.getElementById('peroid');
var homec=document.getElementById('home');
var homes=document.getElementById('state');
var vehicle=document.getElementById('type');
var number=document.getElementById('amount');
var cruise=document.getElementById('CLine');
var info=document.getElementById('moreInfo');

whole.push(firstn)
whole.push(lastn)
whole.push(emailn)
whole.push(phonen)
whole.push(date)
whole.push(time)
whole.push(homec)
whole.push(homes)
whole.push(vehicle)
whole.push(number)
whole.push(cruise)
whole.push(info)

console.log(whole);
send = whole;
var send = document.getElementById('results');

function formSubmit() {
    document.forms["myForm"].submit();
    location.replace("https://josephhark.github.io/lesson%2012/deposit.html")
}
