const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(requestURL)
.then(function (response) {
    return response.json();
})
.then(function (jsonObject) {
   // console.table(jsonObject); 

    const towns = jsonObject['towns'];
    const wantedTowns = towns.filter(town =>(town.name =="Fish Haven"))
    for (let i = 0; i < 3; i++) {

        let card = document.createElement('section');
        let h2 = document.createElement('h2');
        let h4 = document.createElement('h4');
        let image = document.createElement("img");
        let p = document.createElement('p');
        let p2 = document.createElement('p');
        let p3 = document.createElement('p');

        h2.textContent = towns[i].name;
        h4.textContent = towns[i].motto;
        p.textContent = 'Year Founded: ' + towns[i].yearFounded;
        p2.textContent = 'Current Population:' + towns[i].currentPopulation;
        p3.textContent ='Average Yearly Rainfall:' + towns[i].averageRainfall;
        
        
        card.appendChild(h2);
        card.appendChild(h4);
        card.appendChild(p);
        card.appendChild(p2);
        card.appendChild(p3);


    image.setAttribute('src' , towns[i].photo);
    image.setAttribute('alt' , towns[i].name);
    card.appendChild(image);

    document.querySelector('div.cards').appendChild(card);



    };

    
});