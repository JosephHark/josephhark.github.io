
const requestURL = 'https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json';
fetch(requestURL)
.then(function (response) {
return response.json();
})
.then(function (jsonObject) {
console.table(jsonObject);
for (let i = 0; i < 4; i++) {
let card = document.createElement('section');
let h2 = document.createElement('h2');
let h4 = document.createElement('h4');
let img = document.createElement("img");
let p = document.createElement('p');

h2.textContent = towns[i].name;
h4.textContent = towns[i].motto;
img.setAttribute('src', towns[i].photo);
p.textContent = towns[i].yearFounded;
p.textContent = towns[i].currentPopulation;
p.textContent = towns[i].averageRainfall;


card.appendChild(h2);
card.appendChild(h4);
card.appendChild(img);
card.appendChild(p);


document.querySelector('div.cards').appendChild(card);
} // temporary checking for valid response and data parsing
});
const towns = jsonObject['towns'];
